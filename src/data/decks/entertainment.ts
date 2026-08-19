import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'entertainment';

const rows: RawCard[] = [
  ['il film', 'le film', 'Guardiamo un film stasera?', 'On regarde un film ce soir ?'],
  ['la serie TV', 'la série télé', 'Sto guardando una nuova serie TV.', 'Je regarde une nouvelle série télé.'],
  ['lo spettacolo', 'le spectacle', 'Lo spettacolo inizia alle otto.', 'Le spectacle commence à huit heures.'],
  ['il romanzo', 'le roman', 'Sto leggendo un romanzo giallo.', 'Je lis un roman policier.'],
  ['il fumetto', 'la bande dessinée', 'Da bambino leggevo tanti fumetti.', "Enfant, je lisais beaucoup de bandes dessinées."],
  ['il gioco', 'le jeu', 'Facciamo un gioco da tavolo?', 'On fait un jeu de société ?'],
  ['il videogioco', 'le jeu vidéo', 'Gioca ai videogiochi ogni sera.', 'Il joue aux jeux vidéo tous les soirs.'],
  ['la festa', 'la fête', 'Organizziamo una festa sabato.', 'On organise une fête samedi.'],
  ['il divertimento', "le divertissement / l'amusement", 'Che divertimento questa serata!', 'Quelle soirée amusante !'],
  ['la commedia', 'la comédie', 'Preferisco le commedie ai drammi.', 'Je préfère les comédies aux drames.'],
  ['il dramma', 'le drame', 'Il finale del dramma è triste.', 'La fin du drame est triste.'],
  ['il documentario', 'le documentaire', 'Ho visto un documentario sul mare.', "J'ai vu un documentaire sur la mer."],
  ['i cartoni animati', 'les dessins animés', 'I bambini guardano i cartoni animati.', 'Les enfants regardent les dessins animés.'],
  ['la trama', "l'intrigue", 'La trama è complicata.', "L'intrigue est compliquée."],
  ['il personaggio', 'le personnage', 'Il personaggio principale è simpatico.', 'Le personnage principal est sympathique.'],
  ['il finale', 'la fin (histoire)', 'Il finale mi ha sorpreso.', "La fin m'a surpris."],
  ['la recensione', 'la critique', 'Leggo le recensioni prima di scegliere.', 'Je lis les critiques avant de choisir.'],
  ['la sala cinematografica', 'la salle de cinéma', 'La sala cinematografica è piena.', 'La salle de cinéma est pleine.'],
  ['il popcorn', 'le pop-corn', 'Compriamo popcorn al cinema.', 'On achète du pop-corn au cinéma.'],
  ['il sottotitolo', 'le sous-titre', 'Guardo film con i sottotitoli.', 'Je regarde des films avec des sous-titres.'],
  ['il doppiaggio', 'le doublage', 'Preferisco la versione originale al doppiaggio.', 'Je préfère la version originale au doublage.'],
  ['divertirsi', "s'amuser", 'Ci siamo divertiti molto.', 'On s\'est beaucoup amusés.'],
  ['annoiarsi', "s'ennuyer", 'Mi annoio senza niente da fare.', "Je m'ennuie sans rien à faire."],
  ['ridere', 'rire', 'Ridiamo sempre insieme.', 'On rit toujours ensemble.'],
  ['piangere', 'pleurer', 'Il film mi ha fatto piangere.', "Le film m'a fait pleurer."],
  ['la mostra', "l'exposition", 'Visitiamo una mostra di pittura.', 'On visite une exposition de peinture.'],
  ['il parco divertimenti', "le parc d'attractions", 'Andiamo al parco divertimenti.', "On va au parc d'attractions."],
  ['la biglietteria', 'la billetterie', 'Compro i biglietti in biglietteria.', "J'achète les billets à la billetterie."],
];

export const entertainmentCards = buildCards(DECK_ID, rows);
