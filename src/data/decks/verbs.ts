import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'verbs';

const rows: RawCard[] = [
  ['essere', 'être', 'Sono italiano.', 'Je suis italien.', 'Verbe irrégulier essentiel.'],
  ['avere', 'avoir', 'Ho fame.', "J'ai faim.", 'Verbe irrégulier essentiel.'],
  ['andare', 'aller', 'Vado a casa.', 'Je vais à la maison.'],
  ['fare', 'faire', 'Cosa fai?', "Qu'est-ce que tu fais ?"],
  ['parlare', 'parler', 'Parlo italiano.', "Je parle italien."],
  ['mangiare', 'manger', 'Mangio la pizza.', 'Je mange la pizza.'],
  ['bere', 'boire', 'Bevo acqua.', "Je bois de l'eau."],
  ['dormire', 'dormir', 'Dormo otto ore.', 'Je dors huit heures.'],
  ['potere', 'pouvoir', 'Posso aiutarti.', "Je peux t'aider."],
  ['volere', 'vouloir', 'Voglio un caffè.', 'Je veux un café.'],
  ['dovere', 'devoir', 'Devo andare.', "Je dois y aller."],
  ['sapere', 'savoir', 'Non so.', 'Je ne sais pas.'],
  ['vedere', 'voir', 'Vedo il mare.', 'Je vois la mer.'],
  ['venire', 'venir', 'Vengo domani.', 'Je viens demain.'],
  ['dire', 'dire', 'Cosa dici?', "Qu'est-ce que tu dis ?"],
  ['capire', 'comprendre', 'Non capisco.', 'Je ne comprends pas.'],
  ['lavorare', 'travailler', 'Lavoro molto.', 'Je travaille beaucoup.'],
  ['studiare', 'étudier', "Studio l'italiano.", "J'étudie l'italien."],
  ['comprare', 'acheter', 'Compro il pane.', "J'achète le pain."],
  ['amare', 'aimer', 'Ti amo.', "Je t'aime."],
];

export const verbsCards = buildCards(DECK_ID, rows);
