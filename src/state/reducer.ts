import { createInitialProgress, reviewCard as applySm2 } from '../srs/sm2';
import { CardId, DeckId, Flashcard, Grade, PersistedState } from '../types';
import { daysBetween, nowISO, todayKey } from '../utils/date';

const LOG_CAP = 2000;

export type Action =
  | { type: 'HYDRATE'; payload: PersistedState }
  | { type: 'REVIEW_CARD'; cardId: CardId; deckId: DeckId; grade: Grade }
  | { type: 'ADD_CUSTOM_CARD'; card: Flashcard }
  | { type: 'DELETE_CUSTOM_CARD'; cardId: CardId }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<PersistedState['settings']> }
  | { type: 'RESET_DECK_PROGRESS'; deckId: DeckId; cardIds: CardId[] }
  | { type: 'RESET_ALL_PROGRESS' };

function updateStreakOnReview(streak: PersistedState['streak']): PersistedState['streak'] {
  const today = todayKey();
  if (streak.lastStudyDate === today) {
    return { ...streak, totalCardsStudiedAllTime: streak.totalCardsStudiedAllTime + 1 };
  }
  const isConsecutiveDay = streak.lastStudyDate ? daysBetween(streak.lastStudyDate, today) === 1 : false;
  const currentStreak = isConsecutiveDay ? streak.currentStreak + 1 : 1;
  return {
    currentStreak,
    bestStreak: Math.max(streak.bestStreak, currentStreak),
    lastStudyDate: today,
    totalCardsStudiedAllTime: streak.totalCardsStudiedAllTime + 1,
  };
}

/**
 * Stamps updatedAt on every real mutation so the cloud sync layer can tell which
 * copy (local vs. Supabase) is newer without a deep comparison of the whole blob.
 */
export function appReducer(state: PersistedState, action: Action): PersistedState {
  const next = coreReducer(state, action);
  if (action.type === 'HYDRATE' || next === state) return next;
  return { ...next, updatedAt: nowISO() };
}

function coreReducer(state: PersistedState, action: Action): PersistedState {
  switch (action.type) {
    case 'HYDRATE':
      return action.payload;

    case 'REVIEW_CARD': {
      const today = todayKey();
      const existing = state.progress[action.cardId] ?? createInitialProgress(action.cardId);
      const updated = applySm2(existing, action.grade, today);
      const log = [...state.log, { cardId: action.cardId, deckId: action.deckId, date: today, grade: action.grade }];
      return {
        ...state,
        progress: { ...state.progress, [action.cardId]: updated },
        log: log.length > LOG_CAP ? log.slice(log.length - LOG_CAP) : log,
        streak: updateStreakOnReview(state.streak),
      };
    }

    case 'ADD_CUSTOM_CARD':
      return { ...state, customCards: [...state.customCards, action.card] };

    case 'DELETE_CUSTOM_CARD': {
      const { [action.cardId]: _removed, ...restProgress } = state.progress;
      return {
        ...state,
        customCards: state.customCards.filter((c) => c.id !== action.cardId),
        progress: restProgress,
      };
    }

    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.settings } };

    case 'RESET_DECK_PROGRESS': {
      const remaining = { ...state.progress };
      for (const id of action.cardIds) delete remaining[id];
      return { ...state, progress: remaining };
    }

    case 'RESET_ALL_PROGRESS':
      return {
        ...state,
        progress: {},
        log: [],
        streak: { currentStreak: 0, bestStreak: 0, lastStudyDate: null, totalCardsStudiedAllTime: 0 },
      };

    default:
      return state;
  }
}
