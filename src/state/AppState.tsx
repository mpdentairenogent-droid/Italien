import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { BUILTIN_CARDS, DECKS } from '../data';
import { loadState, saveState } from '../storage/storage';
import { isSupabaseConfigured } from '../supabase/client';
import { pickNewerState, pullRemoteState, pushRemoteState } from '../supabase/sync';
import { CardId, Deck, DeckId, Flashcard, Grade, PersistedState, Settings } from '../types';
import { generateId } from '../utils/id';
import { appReducer } from './reducer';
import { DeckProgressSummary, getDeckProgressSummary, getOverallStats, getStudyQueue, OverallStats } from './selectors';

export const CUSTOM_DECK_ID = 'custom';

const CUSTOM_DECK: Deck = {
  id: CUSTOM_DECK_ID,
  name: 'Mes cartes',
  emoji: '📝',
  description: 'Les cartes que vous avez ajoutées vous-même.',
};

interface AppStateContextValue {
  loading: boolean;
  cards: Flashcard[];
  decks: Deck[];
  progress: PersistedState['progress'];
  settings: Settings;
  streak: PersistedState['streak'];
  stats: OverallStats;
  reviewCard: (cardId: CardId, deckId: DeckId, grade: Grade) => void;
  addCustomCard: (input: { italian: string; french: string; example?: string; exampleFr?: string; note?: string }) => void;
  deleteCustomCard: (cardId: CardId) => void;
  updateSettings: (partial: Partial<Settings>) => void;
  resetDeckProgress: (deckId: DeckId) => void;
  resetAllProgress: () => void;
  studyQueueFor: (deckId?: DeckId) => Flashcard[];
  deckSummary: (deckId: DeckId) => DeckProgressSummary;
}

const AppStateContext = createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const userId = user?.id;
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(appReducer, null as unknown as PersistedState);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadState().then(async (loaded) => {
      let merged = loaded;
      if (isSupabaseConfigured && userId) {
        const remote = await pullRemoteState(userId);
        merged = pickNewerState(loaded, remote);
        if (merged !== loaded) await saveState(merged);
      }
      if (cancelled) return;
      dispatch({ type: 'HYDRATE', payload: merged });
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  useEffect(() => {
    if (loading || !state) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveState(state);
      if (isSupabaseConfigured && userId) pushRemoteState(userId, state);
    }, 350);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [state, loading, userId]);

  const cards = useMemo(() => [...BUILTIN_CARDS, ...(state?.customCards ?? [])], [state?.customCards]);
  const decks = useMemo(() => [...DECKS, CUSTOM_DECK], []);

  const stats = useMemo(
    () => getOverallStats(cards, state?.progress ?? {}, state?.log ?? []),
    [cards, state?.progress, state?.log]
  );

  const reviewCard = useCallback((cardId: CardId, deckId: DeckId, grade: Grade) => {
    dispatch({ type: 'REVIEW_CARD', cardId, deckId, grade });
  }, []);

  const addCustomCard = useCallback(
    (input: { italian: string; french: string; example?: string; exampleFr?: string; note?: string }) => {
      const card: Flashcard = {
        id: generateId('custom'),
        deckId: CUSTOM_DECK_ID,
        custom: true,
        ...input,
      };
      dispatch({ type: 'ADD_CUSTOM_CARD', card });
    },
    []
  );

  const deleteCustomCard = useCallback((cardId: CardId) => {
    dispatch({ type: 'DELETE_CUSTOM_CARD', cardId });
  }, []);

  const updateSettings = useCallback((partial: Partial<Settings>) => {
    dispatch({ type: 'UPDATE_SETTINGS', settings: partial });
  }, []);

  const resetDeckProgress = useCallback(
    (deckId: DeckId) => {
      const cardIds = cards.filter((c) => c.deckId === deckId).map((c) => c.id);
      dispatch({ type: 'RESET_DECK_PROGRESS', deckId, cardIds });
    },
    [cards]
  );

  const resetAllProgress = useCallback(() => {
    dispatch({ type: 'RESET_ALL_PROGRESS' });
  }, []);

  const studyQueueFor = useCallback(
    (deckId?: DeckId) => {
      if (!state) return [];
      return getStudyQueue(cards, state.progress, state.settings, state.log, deckId);
    },
    [cards, state]
  );

  const deckSummary = useCallback(
    (deckId: DeckId) => getDeckProgressSummary(cards, state?.progress ?? {}, deckId),
    [cards, state?.progress]
  );

  const value = useMemo<AppStateContextValue>(
    () => ({
      loading,
      cards,
      decks,
      progress: state?.progress ?? {},
      settings: state?.settings ?? { newCardsPerDay: 15, reviewsPerDay: 200, hapticsEnabled: true },
      streak: state?.streak ?? { currentStreak: 0, bestStreak: 0, lastStudyDate: null, totalCardsStudiedAllTime: 0 },
      stats,
      reviewCard,
      addCustomCard,
      deleteCustomCard,
      updateSettings,
      resetDeckProgress,
      resetAllProgress,
      studyQueueFor,
      deckSummary,
    }),
    [loading, cards, decks, state, stats, reviewCard, addCustomCard, deleteCustomCard, updateSettings, resetDeckProgress, resetAllProgress, studyQueueFor, deckSummary]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateContextValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
