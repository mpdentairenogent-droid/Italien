import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'basics';

const rows: RawCard[] = [
  ['Ciao', 'Salut / Bonjour (informel)', 'Ciao, come stai?', 'Salut, comment vas-tu ?'],
  ['Buongiorno', 'Bonjour', 'Buongiorno, signora.', 'Bonjour, madame.'],
  ['Buonasera', 'Bonsoir', 'Buonasera a tutti.', 'Bonsoir à tous.'],
  ['Buonanotte', 'Bonne nuit', 'Buonanotte, dormi bene.', 'Bonne nuit, dors bien.'],
  ['Arrivederci', 'Au revoir', 'Arrivederci, a presto!', 'Au revoir, à bientôt !'],
  ['Per favore', "S'il te plaît / S'il vous plaît", 'Un caffè, per favore.', "Un café, s'il vous plaît."],
  ['Grazie', 'Merci', 'Grazie mille!', 'Merci beaucoup !'],
  ['Prego', "Je t'en prie / De rien", 'Grazie! Prego!', 'Merci ! Je t\'en prie !'],
  ['Scusa', 'Excuse-moi (informel)', 'Scusa, che ore sono?', "Excuse-moi, quelle heure est-il ?"],
  ['Mi scusi', 'Excusez-moi (formel)', "Mi scusi, dov'è la stazione?", 'Excusez-moi, où est la gare ?'],
  ['Come stai?', 'Comment vas-tu ?', 'Ciao, come stai?', 'Salut, comment vas-tu ?'],
  ['Come sta?', 'Comment allez-vous ? (formel)', 'Buongiorno, come sta?', 'Bonjour, comment allez-vous ?'],
  ['Sto bene', 'Je vais bien', 'Sto bene, grazie.', 'Je vais bien, merci.', 'Grazie à la fin rend la phrase plus naturelle.'],
  ['Piacere', 'Enchanté(e)', 'Piacere di conoscerti.', 'Enchanté de te connaître.'],
  ['Sì', 'Oui', 'Sì, certo!', 'Oui, bien sûr !'],
  ['No', 'Non', 'No, grazie.', 'Non, merci.'],
  ['Come ti chiami?', "Comment t'appelles-tu ?", 'Ciao, come ti chiami?', "Salut, comment t'appelles-tu ?"],
  ['Mi chiamo...', "Je m'appelle...", 'Mi chiamo Marco.', "Je m'appelle Marco."],
  ['Non capisco', 'Je ne comprends pas', 'Scusa, non capisco.', 'Désolé, je ne comprends pas.'],
  ['Parli francese?', 'Tu parles français ?', 'Parli francese o inglese?', 'Tu parles français ou anglais ?'],
];

export const basicsCards = buildCards(DECK_ID, rows);
