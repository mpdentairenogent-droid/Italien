import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'society';

const rows: RawCard[] = [
  ['il governo', 'le gouvernement', 'Il governo approva la legge.', 'Le gouvernement approuve la loi.'],
  ['il presidente', 'le président', 'Il presidente parla in TV.', 'Le président parle à la télévision.'],
  ['il primo ministro', 'le premier ministre', 'Il primo ministro visita la città.', 'Le premier ministre visite la ville.'],
  ['le elezioni', 'les élections', 'Le elezioni sono a giugno.', 'Les élections sont en juin.'],
  ['il cittadino', 'le citoyen', 'Ogni cittadino ha dei doveri.', 'Chaque citoyen a des devoirs.'],
  ['la legge', 'la loi', 'La legge protegge i lavoratori.', 'La loi protège les travailleurs.'],
  ['i diritti', 'les droits', 'Difendiamo i nostri diritti.', 'On défend nos droits.'],
  ['la libertà', 'la liberté', 'La libertà è importante.', 'La liberté est importante.'],
  ['la giustizia', 'la justice', 'Crede nella giustizia.', 'Il croit en la justice.'],
  ['la democrazia', 'la démocratie', 'Vivere in democrazia è un privilegio.', 'Vivre en démocratie est un privilège.'],
  ['il parlamento', 'le parlement', 'Il parlamento vota la legge.', 'Le parlement vote la loi.'],
  ['la costituzione', 'la constitution', 'La costituzione garantisce i diritti.', 'La constitution garantit les droits.'],
  ['la tassa', "la taxe / l'impôt", 'Paghiamo le tasse ogni anno.', "On paie les impôts chaque année."],
  ['votare', 'voter', 'Domani vado a votare.', 'Demain je vais voter.'],
  ['manifestare', 'manifester', 'Gli studenti manifestano oggi.', "Les étudiants manifestent aujourd'hui."],
  ['la manifestazione', 'la manifestation', 'La manifestazione è pacifica.', 'La manifestation est pacifique.'],
  ['la comunità', 'la communauté', 'La comunità aiuta i più deboli.', 'La communauté aide les plus faibles.'],
  ['la società', 'la société', 'La società cambia in fretta.', 'La société change vite.'],
  ['la popolazione', 'la population', 'La popolazione cresce ogni anno.', 'La population augmente chaque année.'],
  ["l'ambiente", "l'environnement", "Dobbiamo proteggere l'ambiente.", "Nous devons protéger l'environnement."],
  ["l'inquinamento", 'la pollution', "L'inquinamento aumenta in città.", 'La pollution augmente en ville.'],
  ['il riciclaggio', 'le recyclage', 'Il riciclaggio aiuta il pianeta.', 'Le recyclage aide la planète.'],
  ['sostenibile', 'durable', 'Cerchiamo un futuro sostenibile.', 'On cherche un avenir durable.'],
  ['la guerra', 'la guerre', 'La guerra porta solo dolore.', 'La guerre n\'apporte que de la douleur.'],
  ['la pace', 'la paix', 'Speriamo nella pace.', "On espère la paix."],
  ['il conflitto', 'le conflit', 'Il conflitto continua da anni.', 'Le conflit dure depuis des années.'],
  ["l'immigrazione", "l'immigration", "L'immigrazione è un tema attuale.", "L'immigration est un sujet d'actualité."],
  ['il rifugiato', 'le réfugié', 'Il rifugiato cerca un nuovo inizio.', 'Le réfugié cherche un nouveau départ.'],
  ['la religione', 'la religion', 'Rispettiamo ogni religione.', 'On respecte chaque religion.'],
  ["l'opinione", "l'opinion", "Ognuno ha la propria opinione.", "Chacun a sa propre opinion."],
];

export const societyCards = buildCards(DECK_ID, rows);
