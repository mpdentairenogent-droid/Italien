import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'money';

const rows: RawCard[] = [
  ['i soldi', "l'argent", 'Non ho soldi con me.', "Je n'ai pas d'argent sur moi."],
  ['la banca', 'la banque', 'Vado in banca stamattina.', 'Je vais à la banque ce matin.'],
  ['il conto corrente', 'le compte courant', 'Apro un conto corrente.', 'J\'ouvre un compte courant.'],
  ['il bancomat', 'le distributeur automatique', 'Ritiro contanti al bancomat.', 'Je retire des espèces au distributeur.'],
  ['la moneta', 'la pièce de monnaie', 'Ho trovato una moneta per terra.', "J'ai trouvé une pièce par terre."],
  ['la banconota', 'le billet', 'Ho una banconota da venti euro.', "J'ai un billet de vingt euros."],
  ['il risparmio', "l'épargne", 'Il risparmio è importante.', "L'épargne est importante."],
  ['risparmiare', 'épargner', 'Cerco di risparmiare ogni mese.', "J'essaie d'épargner chaque mois."],
  ['spendere', 'dépenser', 'Spendo troppo in vestiti.', 'Je dépense trop en vêtements.'],
  ['prestare', 'prêter', 'Puoi prestarmi dieci euro?', 'Peux-tu me prêter dix euros ?'],
  ['prendere in prestito', 'emprunter', 'Ho preso in prestito dei soldi.', "J'ai emprunté de l'argent."],
  ['il prestito', 'le prêt', 'Ha chiesto un prestito in banca.', 'Il a demandé un prêt à la banque.'],
  ['il debito', 'la dette', 'Ha ancora un debito da pagare.', 'Il a encore une dette à payer.'],
  ['investire', 'investir', 'Investe in azioni.', 'Il investit en bourse.'],
  ["l'investimento", "l'investissement", "L'investimento è rischioso.", "L'investissement est risqué."],
  ['il profitto', 'le profit', "L'azienda fa un buon profitto.", "L'entreprise fait un bon profit."],
  ['la perdita', 'la perte', 'Hanno registrato una perdita.', 'Ils ont enregistré une perte.'],
  ['il reddito', 'le revenu', 'Il suo reddito è aumentato.', 'Son revenu a augmenté.'],
  ['il bilancio', 'le budget', 'Rispettiamo il bilancio familiare.', 'On respecte le budget familial.'],
  ['il valore', 'la valeur', 'Il valore della casa è salito.', 'La valeur de la maison a augmenté.'],
  ['il cambio', 'le taux de change', 'Controllo il cambio euro-dollaro.', 'Je vérifie le taux de change euro-dollar.'],
  ['la valuta', 'la devise', 'Che valuta usano qui?', 'Quelle devise utilise-t-on ici ?'],
  ["l'euro", "l'euro", 'Pago sempre in euro.', 'Je paie toujours en euros.'],
  ['il dollaro', 'le dollar', 'Cambio euro in dollari.', 'Je change des euros en dollars.'],
  ['ricco', 'riche', 'È diventato molto ricco.', 'Il est devenu très riche.'],
  ['povero', 'pauvre', 'Aiutiamo le famiglie povere.', 'On aide les familles pauvres.'],
  ['costare', 'coûter', 'Quanto costa questo?', 'Combien ça coûte ?'],
  ['la carta di debito', 'la carte de débit', 'Pago con la carta di debito.', 'Je paie avec ma carte de débit.'],
];

export const moneyCards = buildCards(DECK_ID, rows);
