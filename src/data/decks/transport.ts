import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'transport';

const rows: RawCard[] = [
  ['la bicicletta', 'le vélo', 'Vado al lavoro in bicicletta.', 'Je vais au travail à vélo.'],
  ['la moto', 'la moto', 'Ha comprato una moto nuova.', 'Il a acheté une moto neuve.'],
  ['il taxi', 'le taxi', 'Prendiamo un taxi.', 'On prend un taxi.'],
  ['la nave', 'le bateau', 'La nave parte alle sei.', 'Le bateau part à six heures.'],
  ['il traghetto', 'le ferry', 'Il traghetto porta in Sicilia.', 'Le ferry va en Sicile.'],
  ["l'aereo", "l'avion", "L'aereo atterra tra un'ora.", "L'avion atterrit dans une heure."],
  ['il volo', 'le vol', 'Il volo è in ritardo.', 'Le vol est en retard.'],
  ['il conducente', 'le conducteur', 'Il conducente guida con calma.', 'Le conducteur conduit calmement.'],
  ['la patente', 'le permis de conduire', 'Ho preso la patente.', "J'ai eu mon permis de conduire."],
  ['il casco', 'le casque', 'Metti sempre il casco.', 'Mets toujours ton casque.'],
  ['la cintura di sicurezza', 'la ceinture de sécurité', 'Allaccia la cintura di sicurezza.', 'Attache ta ceinture de sécurité.'],
  ['il pieno', "le plein (d'essence)", 'Faccio il pieno.', 'Je fais le plein.'],
  ['la benzina', "l'essence", 'La benzina è cara.', "L'essence est chère."],
  ['il distributore di benzina', 'la station-service', 'Ci fermiamo al distributore.', "On s'arrête à la station-service."],
  ['il pneumatico', 'le pneu', 'Il pneumatico è sgonfio.', 'Le pneu est dégonflé.'],
  ['il motore', 'le moteur', 'Il motore fa rumore.', 'Le moteur fait du bruit.'],
  ['il freno', 'le frein', 'Il freno non risponde bene.', 'Le frein ne répond pas bien.'],
  ['il volante', 'le volant', 'Tiene le mani sul volante.', 'Il garde les mains sur le volant.'],
  ['il parabrezza', 'le pare-brise', 'Il parabrezza è sporco.', 'Le pare-brise est sale.'],
  ['il clacson', 'le klaxon', 'Suona il clacson.', 'Il klaxonne.'],
  ['la targa', "la plaque d'immatriculation", 'La targa è italiana.', "La plaque d'immatriculation est italienne."],
  ['il garage', 'le garage', 'La macchina è nel garage.', 'La voiture est dans le garage.'],
  ['il pedaggio', 'le péage', 'Pago il pedaggio in autostrada.', 'Je paie le péage sur l\'autoroute.'],
  ["l'autostrada", "l'autoroute", "L'autostrada è trafficata.", "L'autoroute est chargée."],
  ['la corsia', 'la voie (route)', 'Cambio corsia con attenzione.', 'Je change de voie avec attention.'],
  ['il binario', 'le quai', 'Il treno parte dal binario tre.', 'Le train part du quai trois.'],
  ['la carrozza', 'le wagon', 'La carrozza è affollata.', 'Le wagon est bondé.'],
  ['lo scompartimento', 'le compartiment', 'Cerco il mio scompartimento.', 'Je cherche mon compartiment.'],
  ['la coincidenza', 'la correspondance', 'Prendo la coincidenza a Milano.', 'Je prends la correspondance à Milan.'],
  ['imbarcarsi', 'embarquer', "Ci imbarchiamo tra poco.", 'On embarque bientôt.'],
  ['atterrare', 'atterrir', "L'aereo atterra in orario.", "L'avion atterrit à l'heure."],
  ['decollare', 'décoller', "L'aereo decolla tra dieci minuti.", "L'avion décolle dans dix minutes."],
];

export const transportCards = buildCards(DECK_ID, rows);
