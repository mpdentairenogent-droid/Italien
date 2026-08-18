import { DeckId } from '../types';

export type Screen =
  | { name: 'home' }
  | { name: 'decks' }
  | { name: 'deckDetail'; deckId: DeckId }
  | { name: 'study'; deckId?: DeckId }
  | { name: 'stats' }
  | { name: 'settings' }
  | { name: 'addCard' };

export type Navigate = (screen: Screen) => void;
