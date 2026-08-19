import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'bignumbers';

const rows: RawCard[] = [
  ['sessanta', 'soixante', 'Mio nonno ha sessanta anni.', 'Mon grand-père a soixante ans.'],
  ['settanta', 'soixante-dix', 'Il libro ha settanta pagine.', 'Le livre a soixante-dix pages.'],
  ['ottanta', 'quatre-vingts', 'La strada è a ottanta chilometri.', 'La route est à quatre-vingts kilomètres.'],
  ['novanta', 'quatre-vingt-dix', 'Ha novanta anni ma sta bene.', 'Il a quatre-vingt-dix ans mais va bien.'],
  ['mille', 'mille', 'Ho pagato mille euro.', "J'ai payé mille euros."],
  ['duemila', 'deux mille', 'La città ha duemila abitanti.', 'La ville compte deux mille habitants.'],
  ['diecimila', 'dix mille', 'Corriamo i diecimila metri.', 'On court le dix mille mètres.'],
  ['centomila', 'cent mille', 'La casa costa centomila euro.', 'La maison coûte cent mille euros.'],
  ['un milione', 'un million', 'Ha vinto un milione al lotto.', 'Il a gagné un million au loto.'],
  ['un miliardo', 'un milliard', "L'azienda vale un miliardo.", "L'entreprise vaut un milliard."],
  ['primo', 'premier', 'È arrivato primo alla gara.', 'Il est arrivé premier à la course.'],
  ['secondo', 'deuxième', 'Abito al secondo piano.', "J'habite au deuxième étage."],
  ['terzo', 'troisième', 'È il terzo giorno di vacanza.', 'C\'est le troisième jour de vacances.'],
  ['quarto', 'quatrième', 'Siamo al quarto capitolo.', 'On est au quatrième chapitre.'],
  ['quinto', 'cinquième', 'È il quinto compleanno di sua figlia.', "C'est le cinquième anniversaire de sa fille."],
  ['sesto', 'sixième', 'Abita al sesto piano.', "Il habite au sixième étage."],
  ['settimo', 'septième', 'È il settimo giorno della settimana.', "C'est le septième jour de la semaine."],
  ['ottavo', 'huitième', "Festeggia l'ottavo anniversario.", 'Il fête son huitième anniversaire.'],
  ['nono', 'neuvième', 'Sono al nono mese di gravidanza.', 'Elle en est au neuvième mois de grossesse.'],
  ['decimo', 'dixième', 'È arrivato decimo.', 'Il est arrivé dixième.'],
  ['la metà', 'la moitié', 'Prendo la metà della torta.', 'Je prends la moitié du gâteau.'],
  ['un terzo', 'un tiers', 'Un terzo della classe è assente.', 'Un tiers de la classe est absent.'],
  ['un quarto', 'un quart', 'Manca un quarto d\'ora.', 'Il manque un quart d\'heure.'],
  ['il doppio', 'le double', 'Guadagna il doppio di me.', 'Il gagne le double de moi.'],
  ['il triplo', 'le triple', 'Costa il triplo del previsto.', 'Ça coûte le triple du prévu.'],
  ['pari', 'pair', 'Quattro è un numero pari.', 'Quatre est un nombre pair.'],
  ['dispari', 'impair', 'Cinque è un numero dispari.', 'Cinq est un nombre impair.'],
  ['la percentuale', 'le pourcentage', 'La percentuale è alta.', 'Le pourcentage est élevé.'],
  ['la somma', 'la somme', 'La somma totale è corretta.', 'La somme totale est correcte.'],
  ['la media', 'la moyenne', 'La sua media è molto buona.', 'Sa moyenne est très bonne.'],
];

export const bignumbersCards = buildCards(DECK_ID, rows);
