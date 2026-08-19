import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistedState } from '../types';

const STORAGE_KEY = '@italien/state/v1';

export function defaultState(): PersistedState {
  return {
    progress: {},
    customCards: [],
    settings: {
      newCardsPerDay: 15,
      reviewsPerDay: 200,
      hapticsEnabled: true,
    },
    streak: {
      currentStreak: 0,
      bestStreak: 0,
      lastStudyDate: null,
      totalCardsStudiedAllTime: 0,
    },
    log: [],
    updatedAt: new Date(0).toISOString(),
  };
}

export async function loadState(): Promise<PersistedState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // Merge over defaults so new fields introduced in later app versions are filled in.
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

export async function saveState(state: PersistedState): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
