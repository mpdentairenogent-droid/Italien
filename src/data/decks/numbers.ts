import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'numbers';

const rows: RawCard[] = [
  ['zero', 'zéro', 'Il conto è zero.', 'Le compte est à zéro.'],
  ['uno', 'un', 'Ho un fratello.', "J'ai un frère."],
  ['due', 'deux', 'Ho due gatti.', "J'ai deux chats."],
  ['tre', 'trois', 'Sono le tre.', 'Il est trois heures.'],
  ['quattro', 'quatre', 'Ci sono quattro sedie.', 'Il y a quatre chaises.'],
  ['cinque', 'cinq', 'Ho cinque euro.', "J'ai cinq euros."],
  ['sei', 'six', 'Lavoro sei giorni.', 'Je travaille six jours.'],
  ['sette', 'sept', 'Ci sono sette giorni in una settimana.', 'Il y a sept jours dans une semaine.'],
  ['otto', 'huit', 'Dormo otto ore.', 'Je dors huit heures.'],
  ['nove', 'neuf', 'Il negozio apre alle nove.', 'Le magasin ouvre à neuf heures.'],
  ['dieci', 'dix', 'Conto fino a dieci.', "Je compte jusqu'à dix."],
  ['undici', 'onze', "L'appuntamento è alle undici.", 'Le rendez-vous est à onze heures.'],
  ['dodici', 'douze', 'Un anno ha dodici mesi.', 'Une année a douze mois.'],
  ['tredici', 'treize', 'Ho tredici messaggi.', "J'ai treize messages."],
  ['quattordici', 'quatorze', 'Il compleanno è il quattordici.', "L'anniversaire est le quatorze."],
  ['quindici', 'quinze', 'Torno tra quindici minuti.', 'Je reviens dans quinze minutes.'],
  ['venti', 'vingt', 'Ho vent\'anni.', "J'ai vingt ans."],
  ['trenta', 'trente', 'Il mese ha trenta giorni.', 'Le mois a trente jours.'],
  ['cinquanta', 'cinquante', 'Costa cinquanta euro.', 'Ça coûte cinquante euros.'],
  ['cento', 'cent', 'Ci sono cento centesimi in un euro.', 'Il y a cent centimes dans un euro.'],
];

export const numbersCards = buildCards(DECK_ID, rows);
