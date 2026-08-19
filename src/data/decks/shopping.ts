import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'shopping';

const rows: RawCard[] = [
  ['vendere', 'vendre', 'Vendo la mia bicicletta.', 'Je vends mon vélo.'],
  ['il prezzo', 'le prix', 'Il prezzo è troppo alto.', 'Le prix est trop élevé.'],
  ['lo sconto', 'la réduction', "C'è uno sconto del venti percento.", "Il y a une réduction de vingt pour cent."],
  ['i saldi', 'les soldes', 'I saldi iniziano domani.', 'Les soldes commencent demain.'],
  ['la cassa', 'la caisse', 'Paghiamo alla cassa.', 'On paie à la caisse.'],
  ['lo scontrino', 'le ticket de caisse', 'Conserva sempre lo scontrino.', 'Garde toujours le ticket de caisse.'],
  ['il carrello', 'le chariot', 'Riempio il carrello di frutta.', 'Je remplis le chariot de fruits.'],
  ['la borsa della spesa', 'le sac de courses', 'Porto la borsa della spesa.', 'Je porte le sac de courses.'],
  ['la taglia', 'la taille (vêtement)', 'Che taglia porti?', 'Quelle taille fais-tu ?'],
  ['la misura', 'la pointure / la mesure', 'Non conosco la mia misura.', 'Je ne connais pas ma pointure.'],
  ['provare', 'essayer (un vêtement)', 'Posso provare questa gonna?', 'Puis-je essayer cette jupe ?'],
  ['il camerino', "la cabine d'essayage", 'Il camerino è occupato.', "La cabine d'essayage est occupée."],
  ['pagare', 'payer', 'Pago con la carta.', 'Je paie par carte.'],
  ['la carta di credito', 'la carte de crédit', 'Uso la carta di credito.', "J'utilise ma carte de crédit."],
  ['i contanti', 'les espèces', 'Preferisco pagare in contanti.', 'Je préfère payer en espèces.'],
  ['il resto', 'la monnaie (rendue)', 'Non hai dimenticato il resto?', "N'as-tu pas oublié la monnaie ?"],
  ['la vetrina', 'la vitrine', 'Guardo la vetrina del negozio.', 'Je regarde la vitrine du magasin.'],
  ["l'offerta", "l'offre", "C'è un'offerta speciale oggi.", "Il y a une offre spéciale aujourd'hui."],
  ['il coupon', 'le bon de réduction', 'Ho un coupon sconto.', "J'ai un bon de réduction."],
  ['la marca', 'la marque', 'Preferisco questa marca.', 'Je préfère cette marque.'],
  ['la qualità', 'la qualité', 'La qualità è eccellente.', 'La qualité est excellente.'],
  ['economico', 'bon marché', 'Questo negozio è economico.', 'Ce magasin est bon marché.'],
  ['costoso', 'cher / coûteux', 'Questo orologio è troppo costoso.', 'Cette montre est trop chère.'],
  ['gratis', 'gratuit', 'La consegna è gratis.', 'La livraison est gratuite.'],
  ['la cintura', 'la ceinture', 'Compro una cintura di pelle.', "J'achète une ceinture en cuir."],
  ['i guanti', 'les gants', "D'inverno porto sempre i guanti.", "En hiver je porte toujours des gants."],
  ['la sciarpa', "l'écharpe", 'Metti la sciarpa, fa freddo.', 'Mets ton écharpe, il fait froid.'],
  ['il pigiama', 'le pyjama', 'Indosso il pigiama la sera.', 'Je mets mon pyjama le soir.'],
  ['il calzino', 'la chaussette', 'Ho perso un calzino.', "J'ai perdu une chaussette."],
  ['il costume da bagno', 'le maillot de bain', 'Porto il costume da bagno in spiaggia.', 'Je prends mon maillot de bain à la plage.'],
  ["l'ombrello", 'le parapluie', "Prendo l'ombrello, piove.", 'Je prends mon parapluie, il pleut.'],
  ['il portafoglio', 'le portefeuille', 'Ho perso il portafoglio.', "J'ai perdu mon portefeuille."],
  ["l'impermeabile", 'l\'imperméable', "Indosso l'impermeabile quando piove.", "Je porte mon imperméable quand il pleut."],
  ['i jeans', 'le jean', 'Porto sempre i jeans.', 'Je porte toujours un jean.'],
  ['la felpa', 'le sweat', 'Metto una felpa calda.', 'Je mets un sweat chaud.'],
];

export const shoppingCards = buildCards(DECK_ID, rows);
