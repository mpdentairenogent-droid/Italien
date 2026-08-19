import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'kitchen';

const rows: RawCard[] = [
  ['il forno', 'le four', 'Accendo il forno a duecento gradi.', 'J\'allume le four à deux cents degrés.'],
  ['il frigorifero', 'le réfrigérateur', 'Metto il latte nel frigorifero.', 'Je mets le lait dans le réfrigérateur.'],
  ['la lavastoviglie', 'le lave-vaisselle', 'Carico la lavastoviglie.', 'Je remplis le lave-vaisselle.'],
  ['il fornello', 'la cuisinière', 'La pasta cuoce sul fornello.', 'Les pâtes cuisent sur la cuisinière.'],
  ['il microonde', 'le micro-ondes', 'Scaldo la cena nel microonde.', 'Je réchauffe le dîner au micro-ondes.'],
  ['la pentola', 'la casserole', 'La pentola bolle.', 'La casserole bout.'],
  ['la padella', 'la poêle', 'Friggo le uova nella padella.', 'Je fais frire les œufs dans la poêle.'],
  ['il coltello', 'le couteau', 'Taglio il pane con il coltello.', 'Je coupe le pain avec le couteau.'],
  ['la forchetta', 'la fourchette', 'Mangio la pasta con la forchetta.', 'Je mange les pâtes avec la fourchette.'],
  ['il cucchiaio', 'la cuillère', 'Mescolo con il cucchiaio.', 'Je mélange avec la cuillère.'],
  ['il cucchiaino', 'la petite cuillère', 'Uso il cucchiaino per lo zucchero.', 'J\'utilise la petite cuillère pour le sucre.'],
  ['il piatto', "l'assiette", 'Metto la pasta nel piatto.', "Je mets les pâtes dans l'assiette."],
  ['la tazza', 'la tasse', 'Bevo il tè in una tazza.', 'Je bois le thé dans une tasse.'],
  ['il bicchiere', 'le verre', 'Riempio il bicchiere d\'acqua.', "Je remplis le verre d'eau."],
  ['la tovaglia', 'la nappe', 'Stendo la tovaglia sul tavolo.', 'Je pose la nappe sur la table.'],
  ['il tovagliolo', 'la serviette de table', 'Prendo un tovagliolo pulito.', 'Je prends une serviette propre.'],
  ['la teglia', 'le plat / le moule', 'Metto la torta nella teglia.', 'Je mets le gâteau dans le moule.'],
  ['il tagliere', 'la planche à découper', 'Taglio le verdure sul tagliere.', 'Je coupe les légumes sur la planche.'],
  ['il mestolo', 'la louche', 'Servo la zuppa con il mestolo.', 'Je sers la soupe avec la louche.'],
  ['lo scolapasta', 'la passoire', 'Scolo la pasta nello scolapasta.', "J'égoutte les pâtes dans la passoire."],
  ['il grembiule', 'le tablier', 'Indosso il grembiule per cucinare.', 'Je mets mon tablier pour cuisiner.'],
  ['il lavandino', "l'évier", 'Lavo i piatti nel lavandino.', "Je lave la vaisselle dans l'évier."],
  ['il rubinetto', 'le robinet', 'Apro il rubinetto.', "J'ouvre le robinet."],
  ['la spugna', "l'éponge", 'Pulisco con la spugna.', "Je nettoie avec l'éponge."],
  ['il detersivo', 'le produit vaisselle', 'Serve altro detersivo.', 'Il faut plus de produit vaisselle.'],
  ['il congelatore', 'le congélateur', 'Metto la carne nel congelatore.', 'Je mets la viande au congélateur.'],
  ['la credenza', 'le buffet', 'I piatti sono nella credenza.', 'Les assiettes sont dans le buffet.'],
  ['cucinare', 'cuisiner', 'Mi piace cucinare la domenica.', 'J\'aime cuisiner le dimanche.'],
  ['tagliare', 'couper', 'Taglio le cipolle.', "Je coupe les oignons."],
  ['mescolare', 'mélanger', 'Mescolo gli ingredienti.', 'Je mélange les ingrédients.'],
  ['friggere', 'frire', 'Friggo le patatine.', 'Je fais frire les frites.'],
  ['bollire', 'bouillir', "L'acqua bolle.", "L'eau bout."],
  ['cuocere', 'cuire', 'Il pollo cuoce in forno.', 'Le poulet cuit au four.'],
];

export const kitchenCards = buildCards(DECK_ID, rows);
