import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'travel';

const rows: RawCard[] = [
  ["l'aeroporto", "l'aéroport", "L'aeroporto è lontano.", "L'aéroport est loin."],
  ['la stazione', 'la gare', 'La stazione è vicina.', 'La gare est proche.'],
  ['il treno', 'le train', 'Il treno parte alle nove.', 'Le train part à neuf heures.'],
  ["l'autobus", 'le bus', "Prendo l'autobus ogni giorno.", 'Je prends le bus tous les jours.'],
  ['la macchina', 'la voiture', 'La macchina è nuova.', 'La voiture est neuve.'],
  ['il biglietto', 'le billet', 'Ho comprato il biglietto.', "J'ai acheté le billet."],
  ["l'albergo", "l'hôtel", "L'albergo è in centro.", "L'hôtel est dans le centre."],
  ['la valigia', 'la valise', 'La valigia è pesante.', 'La valise est lourde.'],
  ['il passaporto', 'le passeport', 'Non trovo il passaporto.', 'Je ne trouve pas mon passeport.'],
  ['a destra', 'à droite', 'Gira a destra.', 'Tourne à droite.'],
  ['a sinistra', 'à gauche', 'Gira a sinistra.', 'Tourne à gauche.'],
  ['dritto', 'tout droit', 'Vai sempre dritto.', 'Continue tout droit.'],
  ['vicino', 'proche', 'Il museo è vicino.', 'Le musée est proche.'],
  ['lontano', 'loin', 'La spiaggia è lontana.', 'La plage est loin.'],
  ["Dov'è...?", 'Où est... ?', "Dov'è la stazione?", 'Où est la gare ?'],
  ['Quanto costa?', 'Combien ça coûte ?', 'Quanto costa il biglietto?', 'Combien coûte le billet ?'],
  ['la strada', 'la rue / la route', 'La strada è lunga.', 'La route est longue.'],
  ['la mappa', 'la carte (plan)', 'Guardo la mappa della città.', 'Je regarde le plan de la ville.'],
];

export const travelCards = buildCards(DECK_ID, rows);
