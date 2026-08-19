import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'personality';

const rows: RawCard[] = [
  ['gentile', 'gentil', 'È sempre molto gentile.', 'Il est toujours très gentil.'],
  ['generoso', 'généreux', 'È generoso con tutti.', 'Il est généreux avec tout le monde.'],
  ['egoista', 'égoïste', 'Non essere così egoista.', 'Ne sois pas si égoïste.'],
  ['onesto', 'honnête', 'È una persona onesta.', 'C\'est une personne honnête.'],
  ['sincero', 'sincère', 'Sii sincero con me.', 'Sois sincère avec moi.'],
  ['bugiardo', 'menteur', 'Non fidarti, è bugiardo.', 'Ne lui fais pas confiance, c\'est un menteur.'],
  ['paziente', 'patient', 'Il maestro è molto paziente.', 'Le maître est très patient.'],
  ['impaziente', 'impatient', 'Sono impaziente di partire.', 'Je suis impatient de partir.'],
  ['intelligente', 'intelligent', 'È una ragazza intelligente.', 'C\'est une fille intelligente.'],
  ['stupido', 'stupide / bête', 'Che errore stupido!', 'Quelle erreur stupide !'],
  ['saggio', 'sage', 'Il nonno dà consigli saggi.', 'Le grand-père donne des conseils sages.'],
  ['furbo', 'malin / rusé', 'È furbo come una volpe.', 'Il est malin comme un renard.'],
  ['ingenuo', 'naïf', 'Sei troppo ingenuo a volte.', 'Tu es trop naïf parfois.'],
  ['testardo', 'têtu', 'È testardo come un mulo.', 'Il est têtu comme une mule.'],
  ['pigro', 'paresseux', 'Oggi mi sento pigro.', 'Aujourd\'hui je me sens paresseux.'],
  ['ambizioso', 'ambitieux', 'Ha un progetto molto ambizioso.', 'Il a un projet très ambitieux.'],
  ['creativo', 'créatif', 'È molto creativo nel suo lavoro.', 'Il est très créatif dans son travail.'],
  ['socievole', 'sociable', 'È socievole e fa amicizia facilmente.', 'Il est sociable et se fait facilement des amis.'],
  ['estroverso', 'extraverti', 'Mio fratello è molto estroverso.', 'Mon frère est très extraverti.'],
  ['introverso', 'introverti', 'Preferisce stare da solo, è introverso.', 'Il préfère être seul, il est introverti.'],
  ['allegro', 'joyeux', 'È sempre allegro al mattino.', 'Il est toujours joyeux le matin.'],
  ['serio', 'sérieux', 'È molto serio sul lavoro.', 'Il est très sérieux au travail.'],
  ['divertente', 'amusant / drôle', 'È la persona più divertente che conosco.', 'C\'est la personne la plus drôle que je connaisse.'],
  ['noioso', 'ennuyeux', 'Il film era un po\' noioso.', 'Le film était un peu ennuyeux.'],
  ['educato', 'poli', 'I suoi figli sono molto educati.', 'Ses enfants sont très polis.'],
  ['maleducato', 'impoli', 'È stato maleducato con il cameriere.', 'Il a été impoli avec le serveur.'],
  ['affidabile', 'fiable', 'È una persona affidabile.', 'C\'est une personne fiable.'],
  ['responsabile', 'responsable', 'È responsabile del progetto.', 'Il est responsable du projet.'],
  ['ottimista', 'optimiste', 'Sono ottimista per il futuro.', "Je suis optimiste pour l'avenir."],
  ['pessimista', 'pessimiste', 'Non essere così pessimista.', 'Ne sois pas si pessimiste.'],
  ['umile', 'humble', 'Nonostante il successo, resta umile.', 'Malgré le succès, il reste humble.'],
  ['arrogante', 'arrogant', 'Il suo tono era arrogante.', 'Son ton était arrogant.'],
  ['determinato', 'déterminé', 'È determinato a riuscire.', 'Il est déterminé à réussir.'],
  ['fedele', 'fidèle', 'È un amico fedele.', 'C\'est un ami fidèle.'],
  ['tollerante', 'tolérant', 'Bisogna essere tolleranti con gli altri.', 'Il faut être tolérant avec les autres.'],
];

export const personalityCards = buildCards(DECK_ID, rows);
