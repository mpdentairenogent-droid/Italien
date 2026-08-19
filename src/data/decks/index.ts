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
import { animalsCards, DECK_ID as ANIMALS_ID } from './animals';
import { natureCards, DECK_ID as NATURE_ID } from './nature';
import { weatherCards, DECK_ID as WEATHER_ID } from './weather';
import { professionsCards, DECK_ID as PROFESSIONS_ID } from './professions';
import { schoolCards, DECK_ID as SCHOOL_ID } from './school';
import { workCards, DECK_ID as WORK_ID } from './work';
import { technologyCards, DECK_ID as TECHNOLOGY_ID } from './technology';
import { cityCards, DECK_ID as CITY_ID } from './city';
import { transportCards, DECK_ID as TRANSPORT_ID } from './transport';
import { sportsCards, DECK_ID as SPORTS_ID } from './sports';
import { musicCards, DECK_ID as MUSIC_ID } from './music';
import { entertainmentCards, DECK_ID as ENTERTAINMENT_ID } from './entertainment';
import { emotionsCards, DECK_ID as EMOTIONS_ID } from './emotions';
import { personalityCards, DECK_ID as PERSONALITY_ID } from './personality';
import { shoppingCards, DECK_ID as SHOPPING_ID } from './shopping';
import { kitchenCards, DECK_ID as KITCHEN_ID } from './kitchen';
import { fruitsvegCards, DECK_ID as FRUITSVEG_ID } from './fruitsveg';
import { restaurantCards, DECK_ID as RESTAURANT_ID } from './restaurant';
import { health2Cards, DECK_ID as HEALTH2_ID } from './health2';
import { relationshipsCards, DECK_ID as RELATIONSHIPS_ID } from './relationships';
import { calendarCards, DECK_ID as CALENDAR_ID } from './calendar';
import { bignumbersCards, DECK_ID as BIGNUMBERS_ID } from './bignumbers';
import { geographyCards, DECK_ID as GEOGRAPHY_ID } from './geography';
import { societyCards, DECK_ID as SOCIETY_ID } from './society';
import { moneyCards, DECK_ID as MONEY_ID } from './money';
import { housethingsCards, DECK_ID as HOUSETHINGS_ID } from './housethings';
import { adjectives2Cards, DECK_ID as ADJECTIVES2_ID } from './adjectives2';
import { verbs2Cards, DECK_ID as VERBS2_ID } from './verbs2';
import { adverbsCards, DECK_ID as ADVERBS_ID } from './adverbs';
import { idiomsCards, DECK_ID as IDIOMS_ID } from './idioms';
import { falsefriendsCards, DECK_ID as FALSEFRIENDS_ID } from './falsefriends';
import { shapesCards, DECK_ID as SHAPES_ID } from './shapes';

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
  { id: ANIMALS_ID, name: 'Les animaux', emoji: '🐾', description: 'Animaux domestiques et sauvages.' },
  { id: NATURE_ID, name: 'Nature et paysages', emoji: '🌿', description: 'Montagnes, mers et forêts.' },
  { id: WEATHER_ID, name: 'Météo et climat', emoji: '☀️', description: 'Parler du temps qu\'il fait.' },
  { id: PROFESSIONS_ID, name: 'Métiers et professions', emoji: '💼', description: 'Qui fait quoi dans la vie.' },
  { id: SCHOOL_ID, name: 'École et études', emoji: '🎓', description: 'La vie scolaire et universitaire.' },
  { id: WORK_ID, name: 'Travail et bureau', emoji: '🖇️', description: 'Le vocabulaire du monde professionnel.' },
  { id: TECHNOLOGY_ID, name: 'Technologie et internet', emoji: '💻', description: 'Ordinateurs, smartphones et réseaux sociaux.' },
  { id: CITY_ID, name: 'Ville et lieux publics', emoji: '🏙️', description: 'Se repérer dans une ville italienne.' },
  { id: TRANSPORT_ID, name: 'Transports', emoji: '🚗', description: 'Voitures, trains et avions.' },
  { id: SPORTS_ID, name: 'Sports et loisirs', emoji: '⚽', description: 'Le vocabulaire du sport.' },
  { id: MUSIC_ID, name: 'Musique et arts', emoji: '🎵', description: 'Instruments, concerts et créativité.' },
  { id: ENTERTAINMENT_ID, name: 'Cinéma, télé et lecture', emoji: '🎬', description: 'Films, séries, livres et jeux.' },
  { id: EMOTIONS_ID, name: 'Émotions et sentiments', emoji: '😊', description: 'Exprimer ce que l\'on ressent.' },
  { id: PERSONALITY_ID, name: 'Caractère et personnalité', emoji: '🧠', description: 'Décrire une personnalité.' },
  { id: SHOPPING_ID, name: 'Shopping et vêtements', emoji: '🛍️', description: 'Faire du shopping en italien.' },
  { id: KITCHEN_ID, name: 'Cuisine et ustensiles', emoji: '🍳', description: 'Le matériel de cuisine.' },
  { id: FRUITSVEG_ID, name: 'Fruits et légumes', emoji: '🍎', description: 'Le marché en italien.' },
  { id: RESTAURANT_ID, name: 'Au restaurant', emoji: '🍷', description: 'Commander et savourer un repas.' },
  { id: HEALTH2_ID, name: 'Santé et médecine', emoji: '🏥', description: 'Le corps, les symptômes et les soins.' },
  { id: RELATIONSHIPS_ID, name: 'Amour et relations', emoji: '❤️', description: 'Les relations humaines et amoureuses.' },
  { id: CALENDAR_ID, name: 'Mois et saisons', emoji: '🗓️', description: 'Le calendrier italien.' },
  { id: BIGNUMBERS_ID, name: 'Grands nombres et ordinaux', emoji: '🔢', description: 'Au-delà de cent, et les nombres ordinaux.' },
  { id: GEOGRAPHY_ID, name: 'Pays et nationalités', emoji: '🌍', description: 'Le monde et ses habitants.' },
  { id: SOCIETY_ID, name: 'Société et vie quotidienne', emoji: '🏛️', description: 'Politique, environnement et société.' },
  { id: MONEY_ID, name: 'Argent et banque', emoji: '💰', description: 'Gérer son argent en italien.' },
  { id: HOUSETHINGS_ID, name: 'Meubles et électroménager', emoji: '🛋️', description: 'Équiper sa maison.' },
  { id: ADJECTIVES2_ID, name: 'Adjectifs avancés', emoji: '📐', description: 'Enrichir son vocabulaire descriptif.' },
  { id: VERBS2_ID, name: 'Verbes avancés', emoji: '🔁', description: 'Verbes courants et réfléchis.' },
  { id: ADVERBS_ID, name: 'Adverbes et connecteurs', emoji: '🧭', description: 'Nuancer et relier ses phrases.' },
  { id: IDIOMS_ID, name: 'Expressions idiomatiques', emoji: '🗯️', description: 'Parler comme un vrai italien.' },
  { id: FALSEFRIENDS_ID, name: 'Faux amis italien-français', emoji: '🎭', description: 'Les pièges entre les deux langues.' },
  { id: SHAPES_ID, name: 'Formes, tailles et matières', emoji: '📏', description: 'Décrire un objet.' },
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
  ...animalsCards,
  ...natureCards,
  ...weatherCards,
  ...professionsCards,
  ...schoolCards,
  ...workCards,
  ...technologyCards,
  ...cityCards,
  ...transportCards,
  ...sportsCards,
  ...musicCards,
  ...entertainmentCards,
  ...emotionsCards,
  ...personalityCards,
  ...shoppingCards,
  ...kitchenCards,
  ...fruitsvegCards,
  ...restaurantCards,
  ...health2Cards,
  ...relationshipsCards,
  ...calendarCards,
  ...bignumbersCards,
  ...geographyCards,
  ...societyCards,
  ...moneyCards,
  ...housethingsCards,
  ...adjectives2Cards,
  ...verbs2Cards,
  ...adverbsCards,
  ...idiomsCards,
  ...falsefriendsCards,
  ...shapesCards,
];
