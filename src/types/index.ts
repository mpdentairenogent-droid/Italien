export type CardId = string;
export type DeckId = string;

export interface Flashcard {
  id: CardId;
  deckId: DeckId;
  italian: string;
  french: string;
  /** Example sentence in Italian */
  example?: string;
  /** French translation of the example sentence */
  exampleFr?: string;
  /** Pronunciation or usage tip */
  note?: string;
  custom?: boolean;
}

export interface Deck {
  id: DeckId;
  name: string;
  emoji: string;
  description: string;
}

export type Grade = 'again' | 'hard' | 'good' | 'easy';

export interface CardProgress {
  cardId: CardId;
  repetitions: number;
  easeFactor: number;
  intervalDays: number;
  /** ISO date (yyyy-mm-dd) the card is next due */
  dueDate: string;
  /** ISO datetime of the last review, or null if never reviewed */
  lastReviewed: string | null;
  /** Consecutive "again" grades on a card that had left the learning phase */
  lapses: number;
  totalReviews: number;
  correctStreak: number;
}

export type ProgressMap = Record<CardId, CardProgress>;

export type CardMaturity = 'new' | 'learning' | 'young' | 'mature';

export interface ReviewLogEntry {
  cardId: CardId;
  deckId: DeckId;
  date: string;
  grade: Grade;
}

export interface Settings {
  newCardsPerDay: number;
  reviewsPerDay: number;
  hapticsEnabled: boolean;
}

export interface StreakData {
  currentStreak: number;
  bestStreak: number;
  lastStudyDate: string | null;
  totalCardsStudiedAllTime: number;
}

export interface PersistedState {
  progress: ProgressMap;
  customCards: Flashcard[];
  settings: Settings;
  streak: StreakData;
  log: ReviewLogEntry[];
  /** ISO datetime of the last local mutation, used to resolve sync conflicts against the cloud copy. */
  updatedAt: string;
}
