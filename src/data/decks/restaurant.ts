import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'restaurant';

const rows: RawCard[] = [
  ['il ristorante', 'le restaurant', 'Ceniamo al ristorante stasera.', 'On dîne au restaurant ce soir.'],
  ['il menu', 'le menu', 'Posso vedere il menu?', 'Puis-je voir le menu ?'],
  ['il conto', "l'addition", 'Il conto, per favore.', "L'addition, s'il vous plaît."],
  ['la mancia', 'le pourboire', 'Lasciamo una mancia.', 'On laisse un pourboire.'],
  ['la prenotazione', 'la réservation', 'Ho una prenotazione per due.', "J'ai une réservation pour deux."],
  ["l'antipasto", "l'entrée", "Prendo un antipasto misto.", 'Je prends une entrée mixte.'],
  ['il primo piatto', 'le premier plat', 'Il primo piatto sono le tagliatelle.', 'Le premier plat, ce sont les tagliatelles.'],
  ['il secondo piatto', 'le plat principal', 'Come secondo prendo il pesce.', 'Comme plat principal, je prends le poisson.'],
  ['il contorno', "l'accompagnement", 'Che contorno vuoi?', 'Quel accompagnement veux-tu ?'],
  ['la specialità', 'la spécialité', 'Qual è la specialità della casa?', 'Quelle est la spécialité de la maison ?'],
  ['ordinare', 'commander', 'Vorrei ordinare adesso.', 'Je voudrais commander maintenant.'],
  ['prenotare', 'réserver', 'Prenoto un tavolo per stasera.', 'Je réserve une table pour ce soir.'],
  ['il piatto del giorno', 'le plat du jour', 'Qual è il piatto del giorno?', 'Quel est le plat du jour ?'],
  ['la lista dei vini', 'la carte des vins', 'Possiamo vedere la lista dei vini?', 'Peut-on voir la carte des vins ?'],
  ['il vino rosso', 'le vin rouge', 'Un bicchiere di vino rosso, grazie.', 'Un verre de vin rouge, merci.'],
  ['il vino bianco', 'le vin blanc', 'Il vino bianco va bene con il pesce.', 'Le vin blanc va bien avec le poisson.'],
  ['la birra', 'la bière', 'Prendo una birra fresca.', 'Je prends une bière fraîche.'],
  ["l'acqua frizzante", 'l\'eau gazeuse', "Preferisco l'acqua frizzante.", "Je préfère l'eau gazeuse."],
  ["l'acqua naturale", 'l\'eau plate', "Un'acqua naturale, per favore.", "Une eau plate, s'il vous plaît."],
  ['il caffè espresso', 'le café expresso', 'Finisco con un caffè espresso.', 'Je termine avec un café expresso.'],
  ['il cappuccino', 'le cappuccino', 'Il cappuccino si beve al mattino.', 'Le cappuccino se boit le matin.'],
  ['il tiramisù', 'le tiramisu', 'Prendiamo un tiramisù da dividere.', 'On prend un tiramisu à partager.'],
  ['la cucina tipica', 'la cuisine typique', 'Amo la cucina tipica toscana.', 'J\'adore la cuisine typique toscane.'],
  ['asporto', 'à emporter', 'Vorrei un caffè da asporto.', 'Je voudrais un café à emporter.'],
  ['la consegna a domicilio', 'la livraison à domicile', 'Ordiniamo la consegna a domicilio.', 'On commande la livraison à domicile.'],
  ['la ricetta', 'la recette', 'Mi dai la ricetta?', 'Tu me donnes la recette ?'],
  ['gli ingredienti', 'les ingrédients', 'Ho tutti gli ingredienti.', "J'ai tous les ingrédients."],
  ['il pasto', 'le repas', 'Il pasto è stato delizioso.', 'Le repas était délicieux.'],
];

export const restaurantCards = buildCards(DECK_ID, rows);
