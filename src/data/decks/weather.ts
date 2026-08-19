import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'weather';

const rows: RawCard[] = [
  ['il tempo', 'le temps (météo)', 'Che tempo fa oggi?', "Quel temps fait-il aujourd'hui ?"],
  ['la pioggia', 'la pluie', 'La pioggia cade tutto il giorno.', 'La pluie tombe toute la journée.'],
  ['la neve', 'la neige', 'La neve copre le montagne.', 'La neige couvre les montagnes.'],
  ['il vento', 'le vent', 'Il vento soffia forte.', 'Le vent souffle fort.'],
  ['il temporale', "l'orage", "Stanotte c'è stato un temporale.", "Cette nuit il y a eu un orage."],
  ['il tuono', 'le tonnerre', 'Ho sentito un tuono.', "J'ai entendu le tonnerre."],
  ['il fulmine', "l'éclair", 'Il fulmine ha illuminato il cielo.', "L'éclair a illuminé le ciel."],
  ['la nebbia', 'le brouillard', "C'è molta nebbia stamattina.", 'Il y a beaucoup de brouillard ce matin.'],
  ['il caldo', 'la chaleur', 'Oggi fa molto caldo.', "Aujourd'hui il fait très chaud."],
  ['il freddo', 'le froid', "D'inverno fa freddo.", 'En hiver il fait froid.'],
  ["l'umidità", "l'humidité", "L'umidità è alta oggi.", "L'humidité est élevée aujourd'hui."],
  ['la temperatura', 'la température', 'La temperatura sale.', 'La température monte.'],
  ['il grado', 'le degré', 'Ci sono trenta gradi.', 'Il fait trente degrés.'],
  ['sereno', 'dégagé / clair', 'Il cielo è sereno.', 'Le ciel est dégagé.'],
  ['nuvoloso', 'nuageux', 'Domani sarà nuvoloso.', 'Demain il fera nuageux.'],
  ['piovoso', 'pluvieux', "L'autunno è piovoso.", "L'automne est pluvieux."],
  ['ventoso', 'venteux', 'La costa è molto ventosa.', 'La côte est très venteuse.'],
  ['afoso', 'lourd / étouffant', "L'aria è afosa stasera.", "L'air est lourd ce soir."],
  ['gelido', 'glacial', 'Il vento è gelido.', 'Le vent est glacial.'],
  ['la grandine', 'la grêle', 'La grandine ha rovinato i fiori.', 'La grêle a abîmé les fleurs.'],
  ["l'arcobaleno", "l'arc-en-ciel", "Dopo la pioggia c'è un arcobaleno.", "Après la pluie il y a un arc-en-ciel."],
  ['il clima', 'le climat', "Il clima sta cambiando.", 'Le climat est en train de changer.'],
  ['la brina', 'le givre', "Stamattina c'era la brina.", 'Ce matin il y avait du givre.'],
  ['mite', 'doux', "L'inverno qui è mite.", 'Ici, l\'hiver est doux.'],
  ['torrido', 'torride', "L'estate è stata torrida.", "L'été a été torride."],
];

export const weatherCards = buildCards(DECK_ID, rows);
