import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'body';

const rows: RawCard[] = [
  ['la testa', 'la tête', 'Ho mal di testa.', "J'ai mal à la tête."],
  ['gli occhi', 'les yeux', 'Ha gli occhi verdi.', 'Il a les yeux verts.'],
  ['la bocca', 'la bouche', 'Apri la bocca.', 'Ouvre la bouche.'],
  ['la mano', 'la main', 'Dammi la mano.', 'Donne-moi la main.'],
  ['il braccio', 'le bras', 'Mi fa male il braccio.', "J'ai mal au bras."],
  ['la gamba', 'la jambe', 'Ho la gamba rotta.', "J'ai la jambe cassée."],
  ['il cuore', 'le cœur', 'Il cuore batte forte.', 'Le cœur bat fort.'],
  ['lo stomaco', "l'estomac", 'Mi fa male lo stomaco.', "J'ai mal à l'estomac."],
  ['il medico', 'le médecin', 'Devo andare dal medico.', 'Je dois aller chez le médecin.'],
  ["l'ospedale", "l'hôpital", "Lavora all'ospedale.", "Il travaille à l'hôpital."],
  ['la farmacia', 'la pharmacie', 'La farmacia è chiusa.', 'La pharmacie est fermée.'],
  ['Sto male', 'Je vais mal / je suis malade', 'Oggi sto male.', "Aujourd'hui je suis malade."],
  ['Ho mal di testa', "J'ai mal à la tête", 'Ho mal di testa da stamattina.', "J'ai mal à la tête depuis ce matin."],
  ['la febbre', 'la fièvre', 'Ho la febbre alta.', "J'ai une forte fièvre."],
  ['il dolore', 'la douleur', 'Sento un forte dolore.', 'Je ressens une forte douleur.'],
  ['sano', 'en bonne santé', 'Mio nonno è molto sano.', 'Mon grand-père est en très bonne santé.'],
];

export const bodyCards = buildCards(DECK_ID, rows);
