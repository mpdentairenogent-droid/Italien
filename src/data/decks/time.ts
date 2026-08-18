import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'time';

const rows: RawCard[] = [
  ['lunedì', 'lundi', 'Lunedì inizio a lavorare.', 'Lundi je commence à travailler.'],
  ['martedì', 'mardi', 'Martedì ho lezione.', "Mardi j'ai cours."],
  ['mercoledì', 'mercredi', 'Mercoledì è il mio giorno libero.', 'Mercredi est mon jour de repos.'],
  ['giovedì', 'jeudi', 'Giovedì piove.', 'Jeudi il pleut.'],
  ['venerdì', 'vendredi', 'Venerdì usciamo insieme.', 'Vendredi on sort ensemble.'],
  ['sabato', 'samedi', 'Sabato faccio la spesa.', 'Samedi je fais les courses.'],
  ['domenica', 'dimanche', 'La domenica riposo.', 'Le dimanche je me repose.'],
  ['oggi', "aujourd'hui", 'Oggi fa bel tempo.', "Aujourd'hui il fait beau."],
  ['domani', 'demain', 'Domani parto per Roma.', 'Demain je pars pour Rome.'],
  ['ieri', 'hier', 'Ieri ho studiato italiano.', "Hier j'ai étudié l'italien."],
  ['adesso', 'maintenant', 'Adesso devo andare.', 'Maintenant je dois y aller.'],
  ['dopo', 'après', 'Ci vediamo dopo.', 'On se voit après.'],
  ['prima', 'avant', 'Prima mangio, poi esco.', "D'abord je mange, ensuite je sors."],
  ['sempre', 'toujours', 'Sono sempre in ritardo.', 'Je suis toujours en retard.'],
  ['mai', 'jamais', 'Non vado mai al cinema.', 'Je ne vais jamais au cinéma.'],
  ['spesso', 'souvent', 'Viaggio spesso in Italia.', 'Je voyage souvent en Italie.'],
  ['la settimana', 'la semaine', 'Questa settimana sono occupato.', 'Cette semaine je suis occupé.'],
  ['il mese', 'le mois', 'Il mese prossimo vado in Italia.', 'Le mois prochain je vais en Italie.'],
  ["l'anno", "l'année", "Buon anno!", 'Bonne année !'],
  ["l'ora", "l'heure", 'Che ora è?', 'Quelle heure est-il ?'],
];

export const timeCards = buildCards(DECK_ID, rows);
