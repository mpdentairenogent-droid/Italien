import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'nature';

const rows: RawCard[] = [
  ['il fiore', 'la fleur', 'Il fiore profuma il giardino.', 'La fleur parfume le jardin.'],
  ["l'albero", "l'arbre", "L'albero è molto alto.", 'L\'arbre est très grand.'],
  ["l'erba", "l'herbe", "L'erba è verde e fresca.", "L'herbe est verte et fraîche."],
  ['la foglia', 'la feuille', 'La foglia cade in autunno.', "La feuille tombe en automne."],
  ['il ramo', 'la branche', "L'uccello è sul ramo.", "L'oiseau est sur la branche."],
  ['la radice', 'la racine', "L'albero ha radici profonde.", "L'arbre a des racines profondes."],
  ['la foresta', 'la forêt', 'La foresta è piena di alberi.', "La forêt est pleine d'arbres."],
  ['la montagna', 'la montagne', "Amo camminare in montagna.", "J'aime marcher en montagne."],
  ['la collina', 'la colline', 'La casa è su una collina.', 'La maison est sur une colline.'],
  ['la valle', 'la vallée', 'La valle è verde.', 'La vallée est verte.'],
  ['il fiume', 'le fleuve / la rivière', 'Il fiume attraversa la città.', 'Le fleuve traverse la ville.'],
  ['il lago', 'le lac', 'Il lago è calmo la mattina.', 'Le lac est calme le matin.'],
  ['il mare', 'la mer', 'Il mare è blu oggi.', "La mer est bleue aujourd'hui."],
  ["l'oceano", "l'océan", "L'oceano è immenso.", "L'océan est immense."],
  ['la spiaggia', 'la plage', 'Andiamo alla spiaggia domani.', 'On va à la plage demain.'],
  ["l'isola", "l'île", "L'isola è deserta.", "L'île est déserte."],
  ['il deserto', 'le désert', 'Il deserto è molto caldo.', 'Le désert est très chaud.'],
  ['la roccia', 'le rocher / la roche', 'La roccia è dura.', 'La roche est dure.'],
  ['la pietra', 'la pierre', 'Ho trovato una pietra bella.', "J'ai trouvé une belle pierre."],
  ['la sabbia', 'le sable', 'La sabbia è calda sotto i piedi.', 'Le sable est chaud sous les pieds.'],
  ['il cielo', 'le ciel', 'Il cielo è sereno.', 'Le ciel est dégagé.'],
  ['la nuvola', 'le nuage', 'Quella nuvola sembra un cane.', 'Ce nuage ressemble à un chien.'],
  ['la stella', "l'étoile", 'Stanotte si vedono le stelle.', "Ce soir on voit les étoiles."],
  ['la luna', 'la lune', 'La luna illumina la notte.', 'La lune illumine la nuit.'],
  ['il sole', 'le soleil', 'Il sole tramonta lentamente.', 'Le soleil se couche lentement.'],
  ['la terra', 'la terre', 'La terra gira intorno al sole.', 'La terre tourne autour du soleil.'],
  ['il pianeta', 'la planète', 'Marte è un pianeta rosso.', 'Mars est une planète rouge.'],
  ['il vulcano', 'le volcan', 'Il vulcano è ancora attivo.', 'Le volcan est encore actif.'],
  ['la cascata', 'la cascade', 'La cascata fa molto rumore.', 'La cascade fait beaucoup de bruit.'],
  ['il ghiaccio', 'la glace (naturelle)', "Il lago è coperto di ghiaccio.", 'Le lac est couvert de glace.'],
  ['la pianta', 'la plante', 'Innaffio la pianta ogni giorno.', "J'arrose la plante tous les jours."],
  ['il seme', 'la graine', 'Pianto un seme nel vaso.', 'Je plante une graine dans le pot.'],
  ['il prato', 'le pré / la prairie', 'I bambini giocano nel prato.', 'Les enfants jouent dans le pré.'],
  ['il paesaggio', 'le paysage', 'Il paesaggio è magnifico.', 'Le paysage est magnifique.'],
  ['il tramonto', 'le coucher de soleil', 'Guardiamo il tramonto insieme.', 'On regarde le coucher de soleil ensemble.'],
];

export const natureCards = buildCards(DECK_ID, rows);
