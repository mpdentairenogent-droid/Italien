import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'house';

const rows: RawCard[] = [
  ['la casa', 'la maison', 'La mia casa è grande.', 'Ma maison est grande.'],
  ['la camera', 'la chambre', 'La camera è al primo piano.', 'La chambre est au premier étage.'],
  ['la cucina', 'la cuisine', 'Cucino nella cucina nuova.', 'Je cuisine dans la nouvelle cuisine.'],
  ['il bagno', 'la salle de bain', "Dov'è il bagno?", 'Où sont les toilettes ?'],
  ['il salotto', 'le salon', 'Guardiamo la TV in salotto.', 'On regarde la télé dans le salon.'],
  ['la porta', 'la porte', 'Chiudi la porta, per favore.', "Ferme la porte, s'il te plaît."],
  ['la finestra', 'la fenêtre', 'Apro la finestra.', "J'ouvre la fenêtre."],
  ['il letto', 'le lit', 'Vado a letto presto.', 'Je vais au lit tôt.'],
  ['la sedia', 'la chaise', 'Siediti sulla sedia.', 'Assieds-toi sur la chaise.'],
  ['il tavolo', 'la table', 'Metti i piatti sul tavolo.', 'Mets les assiettes sur la table.'],
  ['la maglietta', 'le t-shirt', 'Indosso una maglietta blu.', 'Je porte un t-shirt bleu.'],
  ['i pantaloni', 'le pantalon', 'Questi pantaloni sono nuovi.', 'Ce pantalon est neuf.'],
  ['la giacca', 'la veste', 'Fa freddo, prendi la giacca.', 'Il fait froid, prends la veste.'],
  ['le scarpe', 'les chaussures', 'Le scarpe sono comode.', 'Les chaussures sont confortables.'],
  ['il cappello', 'le chapeau', 'Porta un cappello rosso.', 'Il porte un chapeau rouge.'],
  ['il vestito', 'la robe / le vêtement', 'Il vestito è elegante.', 'La robe est élégante.'],
  ['gli occhiali', 'les lunettes', 'Ho perso gli occhiali.', "J'ai perdu mes lunettes."],
  ['la borsa', 'le sac', 'La borsa è sul tavolo.', 'Le sac est sur la table.'],
];

export const houseCards = buildCards(DECK_ID, rows);
