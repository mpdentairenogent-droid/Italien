import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'adjectives';

const rows: RawCard[] = [
  ['grande', 'grand', 'La casa è grande.', 'La maison est grande.'],
  ['piccolo', 'petit', 'Il cane è piccolo.', 'Le chien est petit.'],
  ['bello', 'beau', 'Che bel panorama!', 'Quel beau panorama !'],
  ['brutto', 'laid', 'Il tempo è brutto oggi.', "Le temps est mauvais aujourd'hui."],
  ['buono', 'bon', 'Questo gelato è buono.', 'Cette glace est bonne.'],
  ['cattivo', 'mauvais', 'Ha un carattere cattivo.', 'Il a un mauvais caractère.'],
  ['nuovo', 'nouveau', 'Ho comprato un telefono nuovo.', "J'ai acheté un nouveau téléphone."],
  ['vecchio', 'vieux', 'Questo libro è vecchio.', 'Ce livre est vieux.'],
  ['caldo', 'chaud', 'Il caffè è caldo.', 'Le café est chaud.'],
  ['freddo', 'froid', "L'acqua è fredda.", "L'eau est froide."],
  ['facile', 'facile', "L'esame era facile.", "L'examen était facile."],
  ['difficile', 'difficile', "L'italiano non è difficile.", "L'italien n'est pas difficile."],
  ['felice', 'heureux', 'Sono molto felice.', 'Je suis très heureux.'],
  ['triste', 'triste', 'Perché sei triste?', 'Pourquoi es-tu triste ?'],
  ['veloce', 'rapide', 'Questa macchina è veloce.', 'Cette voiture est rapide.'],
  ['lento', 'lent', 'Il treno è lento oggi.', "Le train est lent aujourd'hui."],
  ['importante', 'important', 'È un giorno importante.', 'C\'est un jour important.'],
  ['simpatico', 'sympathique', 'Il tuo amico è simpatico.', 'Ton ami est sympathique.'],
];

export const adjectivesCards = buildCards(DECK_ID, rows);
