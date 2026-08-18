import { Deck, Flashcard } from '../../types';
import { basicsCards, DECK_ID as BASICS_ID } from './basics';
import { numbersCards, DECK_ID as NUMBERS_ID } from './numbers';
import { familyCards, DECK_ID as FAMILY_ID } from './family';
import { foodCards, DECK_ID as FOOD_ID } from './food';
import { colorsCards, DECK_ID as COLORS_ID } from './colors';
import { timeCards, DECK_ID as TIME_ID } from './time';
import { verbsCards, DECK_ID as VERBS_ID } from './verbs';
import { travelCards, DECK_ID as TRAVEL_ID } from './travel';
import { bodyCards, DECK_ID as BODY_ID } from './body';
import { houseCards, DECK_ID as HOUSE_ID } from './house';
import { adjectivesCards, DECK_ID as ADJECTIVES_ID } from './adjectives';
import { phrasesCards, DECK_ID as PHRASES_ID } from './phrases';

export const DECKS: Deck[] = [
  { id: BASICS_ID, name: 'Salutations et expressions', emoji: '👋', description: 'Les indispensables pour se présenter et être poli.' },
  { id: NUMBERS_ID, name: 'Les nombres', emoji: '🔢', description: 'Compter de zéro à cent.' },
  { id: FAMILY_ID, name: 'La famille', emoji: '👨‍👩‍👧‍👦', description: 'Parler de ses proches.' },
  { id: FOOD_ID, name: 'Nourriture et boissons', emoji: '🍝', description: 'Le vocabulaire gourmand de la cuisine italienne.' },
  { id: COLORS_ID, name: 'Les couleurs', emoji: '🎨', description: 'Décrire ce que l’on voit.' },
  { id: TIME_ID, name: 'Le temps qui passe', emoji: '📅', description: 'Jours de la semaine et expressions temporelles.' },
  { id: VERBS_ID, name: 'Verbes courants', emoji: '🏃', description: 'Les verbes indispensables au présent.' },
  { id: TRAVEL_ID, name: 'Voyage et directions', emoji: '✈️', description: 'Se déplacer et s’orienter en Italie.' },
  { id: BODY_ID, name: 'Le corps et la santé', emoji: '🩺', description: 'Parler de son corps et de sa santé.' },
  { id: HOUSE_ID, name: 'La maison et les vêtements', emoji: '🏠', description: 'La maison et la garde-robe.' },
  { id: ADJECTIVES_ID, name: 'Adjectifs courants', emoji: '✨', description: 'Décrire les gens et les choses.' },
  { id: PHRASES_ID, name: 'Phrases utiles', emoji: '💬', description: 'Des expressions à sortir au bon moment.' },
];

export const BUILTIN_CARDS: Flashcard[] = [
  ...basicsCards,
  ...numbersCards,
  ...familyCards,
  ...foodCards,
  ...colorsCards,
  ...timeCards,
  ...verbsCards,
  ...travelCards,
  ...bodyCards,
  ...houseCards,
  ...adjectivesCards,
  ...phrasesCards,
];
