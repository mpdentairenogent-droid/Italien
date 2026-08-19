import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'calendar';

const rows: RawCard[] = [
  ['gennaio', 'janvier', 'Gennaio è il primo mese.', "Janvier est le premier mois."],
  ['febbraio', 'février', 'Febbraio è corto.', 'Février est court.'],
  ['marzo', 'mars', 'La primavera inizia a marzo.', 'Le printemps commence en mars.'],
  ['aprile', 'avril', 'Piove spesso ad aprile.', "Il pleut souvent en avril."],
  ['maggio', 'mai', 'Maggio è un mese fiorito.', 'Mai est un mois fleuri.'],
  ['giugno', 'juin', 'La scuola finisce a giugno.', "L'école finit en juin."],
  ['luglio', 'juillet', 'A luglio fa molto caldo.', "En juillet il fait très chaud."],
  ['agosto', 'août', 'Andiamo in vacanza ad agosto.', 'On part en vacances en août.'],
  ['settembre', 'septembre', 'La scuola ricomincia a settembre.', "L'école recommence en septembre."],
  ['ottobre', 'octobre', 'Le foglie cadono a ottobre.', 'Les feuilles tombent en octobre.'],
  ['novembre', 'novembre', 'Novembre è grigio e piovoso.', 'Novembre est gris et pluvieux.'],
  ['dicembre', 'décembre', 'Natale è a dicembre.', "Noël est en décembre."],
  ['la primavera', 'le printemps', 'I fiori sbocciano in primavera.', 'Les fleurs éclosent au printemps.'],
  ["l'estate", "l'été", "D'estate andiamo al mare.", "En été, on va à la mer."],
  ["l'autunno", "l'automne", "L'autunno è la mia stagione preferita.", "L'automne est ma saison préférée."],
  ["l'inverno", "l'hiver", "D'inverno nevica in montagna.", 'En hiver, il neige en montagne.'],
  ['la stagione', 'la saison', 'Qual è la tua stagione preferita?', 'Quelle est ta saison préférée ?'],
  ['il weekend', 'le week-end', 'Cosa fai questo weekend?', 'Que fais-tu ce week-end ?'],
  ['il giorno festivo', 'le jour férié', 'Domani è un giorno festivo.', 'Demain est un jour férié.'],
  ['il compleanno', "l'anniversaire", 'Buon compleanno!', 'Joyeux anniversaire !'],
];

export const calendarCards = buildCards(DECK_ID, rows);
