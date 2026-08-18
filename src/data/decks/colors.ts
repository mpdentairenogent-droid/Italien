import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'colors';

const rows: RawCard[] = [
  ['rosso', 'rouge', 'La macchina è rossa.', 'La voiture est rouge.'],
  ['blu', 'bleu', 'Il cielo è blu.', 'Le ciel est bleu.'],
  ['verde', 'vert', "L'erba è verde.", "L'herbe est verte."],
  ['giallo', 'jaune', 'Il sole è giallo.', 'Le soleil est jaune.'],
  ['bianco', 'blanc', 'Il muro è bianco.', 'Le mur est blanc.'],
  ['nero', 'noir', 'Ho un gatto nero.', "J'ai un chat noir."],
  ['arancione', 'orange', "L'arancia è arancione.", 'L\'orange est orange.'],
  ['viola', 'violet', 'Mi piace il colore viola.', "J'aime la couleur violette."],
  ['grigio', 'gris', 'Il cielo è grigio oggi.', 'Le ciel est gris aujourd\'hui.'],
  ['marrone', 'marron', 'Ho gli occhi marroni.', "J'ai les yeux marron."],
  ['rosa', 'rose', 'Il fiore è rosa.', 'La fleur est rose.'],
  ['azzurro', 'bleu clair / azur', 'Il mare è azzurro.', 'La mer est bleu azur.'],
];

export const colorsCards = buildCards(DECK_ID, rows);
