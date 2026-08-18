import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'food';

const rows: RawCard[] = [
  ['il pane', 'le pain', 'Compro il pane fresco.', 'Je fais du pain frais.'],
  ["l'acqua", "l'eau", 'Vorrei un bicchiere d\'acqua.', "Je voudrais un verre d'eau."],
  ['il vino', 'le vin', 'Il vino rosso è buono.', 'Le vin rouge est bon.'],
  ['il caffè', 'le café', 'Prendo un caffè al bar.', 'Je prends un café au bar.'],
  ['la pasta', 'les pâtes', 'La pasta è pronta.', 'Les pâtes sont prêtes.'],
  ['la pizza', 'la pizza', 'Mangiamo una pizza stasera?', 'On mange une pizza ce soir ?'],
  ['il formaggio', 'le fromage', 'Il formaggio italiano è famoso.', 'Le fromage italien est célèbre.'],
  ['la carne', 'la viande', 'Non mangio carne.', 'Je ne mange pas de viande.'],
  ['il pesce', 'le poisson', 'Il pesce è freschissimo.', 'Le poisson est très frais.'],
  ['la verdura', 'les légumes', 'Mangio molta verdura.', 'Je mange beaucoup de légumes.'],
  ['la frutta', 'les fruits', 'La frutta fa bene alla salute.', 'Les fruits sont bons pour la santé.'],
  ['il pomodoro', 'la tomate', 'Il sugo ha bisogno di pomodoro.', 'La sauce a besoin de tomate.'],
  ["l'insalata", 'la salade', 'Preparo un\'insalata mista.', 'Je prépare une salade mixte.'],
  ['il dolce', 'le dessert / le gâteau', 'Vuoi un dolce?', 'Tu veux un dessert ?'],
  ['la colazione', 'le petit-déjeuner', 'Faccio colazione alle otto.', 'Je prends le petit-déjeuner à huit heures.'],
  ['il pranzo', 'le déjeuner', 'Il pranzo è pronto.', 'Le déjeuner est prêt.'],
  ['la cena', 'le dîner', 'Stasera preparo la cena.', 'Ce soir je prépare le dîner.'],
  ['lo zucchero', 'le sucre', 'Metto poco zucchero nel caffè.', 'Je mets peu de sucre dans le café.'],
  ['il sale', 'le sel', 'Manca il sale nella zuppa.', 'Il manque du sel dans la soupe.'],
  ['il gelato', 'la glace', 'Il gelato al limone è ottimo.', 'La glace au citron est excellente.'],
];

export const foodCards = buildCards(DECK_ID, rows);
