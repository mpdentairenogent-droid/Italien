import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'shapes';

const rows: RawCard[] = [
  ['il cerchio', 'le cercle', 'Disegna un cerchio perfetto.', 'Il dessine un cercle parfait.'],
  ['il quadrato', 'le carré', 'Il tavolo è quadrato.', 'La table est carrée.'],
  ['il triangolo', 'le triangle', 'Il triangolo ha tre lati.', 'Le triangle a trois côtés.'],
  ['il rettangolo', 'le rectangle', 'Il foglio è un rettangolo.', 'La feuille est un rectangle.'],
  ["l'ovale", "l'ovale", "Il tavolo ha una forma ovale.", 'La table a une forme ovale.'],
  ['la linea', 'la ligne', 'Traccio una linea dritta.', 'Je trace une ligne droite.'],
  ['il punto', 'le point', 'Metti un punto qui.', 'Mets un point ici.'],
  ["l'angolo", "l'angle", "L'angolo è di novanta gradi.", "L'angle est de quatre-vingt-dix degrés."],
  ['il cubo', 'le cube', 'Il dado ha la forma di un cubo.', 'Le dé a la forme d\'un cube.'],
  ['la sfera', 'la sphère', 'La terra è quasi una sfera.', 'La terre est presque une sphère.'],
  ['enorme', 'énorme', 'Ha una casa enorme.', 'Il a une maison énorme.'],
  ['minuscolo', 'minuscule', "L'appartamento è minuscolo.", "L'appartement est minuscule."],
  ['gigante', 'géant', 'Hanno costruito uno schermo gigante.', 'Ils ont construit un écran géant.'],
  ['il metallo', 'le métal', 'La porta è di metallo.', 'La porte est en métal.'],
  ['il legno', 'le bois', 'Il tavolo è di legno massiccio.', 'La table est en bois massif.'],
  ['la plastica', 'le plastique', 'Evitiamo la plastica monouso.', 'On évite le plastique à usage unique.'],
  ['la carta', 'le papier', 'Scrivo su un foglio di carta.', 'J\'écris sur une feuille de papier.'],
  ['la stoffa', 'le tissu', 'Questa stoffa è molto morbida.', 'Ce tissu est très doux.'],
  ['il cotone', 'le coton', 'La maglietta è di cotone.', 'Le t-shirt est en coton.'],
  ['la lana', 'la laine', "Il maglione è di lana.", 'Le pull est en laine.'],
  ['la seta', 'la soie', 'La sciarpa è di seta.', 'L\'écharpe est en soie.'],
  ['il cemento', 'le béton', 'Il muro è di cemento.', 'Le mur est en béton.'],
  ["l'oro", "l'or", 'L\'anello è d\'oro.', "La bague est en or."],
  ["l'argento", "l'argent (métal)", "La collana è d'argento.", "Le collier est en argent."],
  ['il ferro', 'le fer', 'Il cancello è di ferro.', 'Le portail est en fer.'],
  ['rotondo', 'rond', 'Il tavolo della cucina è rotondo.', 'La table de la cuisine est ronde.'],
  ['appuntito', 'pointu', 'La matita è molto appuntita.', 'Le crayon est très pointu.'],
];

export const shapesCards = buildCards(DECK_ID, rows);
