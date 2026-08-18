import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'phrases';

const rows: RawCard[] = [
  ['Quanto costa?', 'Combien ça coûte ?', 'Quanto costa questa maglietta?', 'Combien coûte ce t-shirt ?'],
  ['Che ore sono?', 'Quelle heure est-il ?', 'Scusa, che ore sono?', "Excuse-moi, quelle heure est-il ?"],
  ['Dov\'è il bagno?', 'Où sont les toilettes ?', 'Mi scusi, dov\'è il bagno?', 'Excusez-moi, où sont les toilettes ?'],
  ['Aiuto!', 'Au secours !', 'Aiuto, chiamate un medico!', 'Au secours, appelez un médecin !'],
  ['Non lo so', 'Je ne sais pas', 'Non lo so, mi dispiace.', 'Je ne sais pas, désolé.'],
  ['Sono perso/a', 'Je suis perdu(e)', 'Scusi, sono perso.', 'Excusez-moi, je suis perdu.'],
  ['Va bene', "D'accord / Ça va", 'Va bene, ci vediamo domani.', "D'accord, on se voit demain."],
  ['Che peccato!', 'Quel dommage !', 'Non puoi venire? Che peccato!', 'Tu ne peux pas venir ? Quel dommage !'],
  ['In bocca al lupo!', 'Bonne chance !', 'Domani hai l\'esame? In bocca al lupo!', "Tu as l'examen demain ? Bonne chance !", 'Idiome : on répond "Crepi!"'],
  ['Auguri!', 'Félicitations ! / Meilleurs vœux !', 'Ti sposi? Auguri!', 'Tu te maries ? Félicitations !'],
  ['Buon appetito!', 'Bon appétit !', 'Il pranzo è pronto, buon appetito!', 'Le déjeuner est prêt, bon appétit !'],
  ['Salute!', 'Santé !', 'Salute! Cin cin!', 'Santé ! Tchin-tchin !', 'Se dit aussi après un éternuement.'],
  ["Non c'è problema", 'Pas de problème', "Arrivo tardi. Non c'è problema!", "J'arrive en retard. Pas de problème !"],
  ['A che ora?', 'À quelle heure ?', 'A che ora parte il treno?', 'À quelle heure part le train ?'],
  ['Mi piace', 'J\'aime ça / Ça me plaît', 'Mi piace molto questa canzone.', 'J\'aime beaucoup cette chanson.'],
  ['Non mi piace', "Je n'aime pas ça", 'Non mi piace il pesce.', "Je n'aime pas le poisson."],
];

export const phrasesCards = buildCards(DECK_ID, rows);
