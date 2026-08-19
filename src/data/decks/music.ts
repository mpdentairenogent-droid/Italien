import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'music';

const rows: RawCard[] = [
  ['la musica', 'la musique', 'Ascolto musica ogni giorno.', "J'écoute de la musique tous les jours."],
  ['la canzone', 'la chanson', 'Questa canzone mi piace molto.', 'Cette chanson me plaît beaucoup.'],
  ['il concerto', 'le concert', 'Andiamo al concerto stasera.', 'On va au concert ce soir.'],
  ['lo strumento', "l'instrument", 'Suoni uno strumento?', "Tu joues d'un instrument ?"],
  ['il pianoforte', 'le piano', 'Studia pianoforte da cinque anni.', 'Elle étudie le piano depuis cinq ans.'],
  ['la chitarra', 'la guitare', 'Suono la chitarra da autodidatta.', 'Je joue de la guitare en autodidacte.'],
  ['il violino', 'le violon', 'Il violino ha un suono dolce.', 'Le violon a un son doux.'],
  ['la batteria musicale', 'la batterie (instrument)', 'Suona la batteria nella band.', 'Il joue de la batterie dans le groupe.'],
  ['la tromba', 'la trompette', 'La tromba è uno strumento a fiato.', 'La trompette est un instrument à vent.'],
  ['il flauto', 'la flûte', 'Impara a suonare il flauto.', 'Il apprend à jouer de la flûte.'],
  ['la voce', 'la voix', 'Ha una voce potente.', 'Il a une voix puissante.'],
  ['la nota musicale', 'la note de musique', 'Legge le note musicali.', 'Il lit les notes de musique.'],
  ['il ritmo', 'le rythme', 'Il ritmo è molto veloce.', 'Le rythme est très rapide.'],
  ['la melodia', 'la mélodie', 'La melodia è orecchiabile.', 'La mélodie est entraînante.'],
  ['il testo', 'les paroles (chanson)', 'Non capisco il testo della canzone.', "Je ne comprends pas les paroles de la chanson."],
  ["l'album", "l'album", "Ha pubblicato un nuovo album.", 'Il a sorti un nouvel album.'],
  ['il disco', 'le disque', 'Colleziona dischi in vinile.', 'Il collectionne les disques vinyles.'],
  ['la radio', 'la radio', 'Ascolto la radio in macchina.', "J'écoute la radio en voiture."],
  ['il microfono', 'le microphone', 'Parla nel microfono.', 'Il parle dans le microphone.'],
  ['il palco', 'la scène', 'Sale sul palco emozionato.', 'Il monte sur scène, ému.'],
  ['il pubblico', 'le public', 'Il pubblico applaude.', 'Le public applaudit.'],
  ['applaudire', 'applaudir', 'Tutti applaudono alla fine.', 'Tout le monde applaudit à la fin.'],
  ['ballare', 'danser', 'Ci piace ballare insieme.', 'On aime danser ensemble.'],
  ['cantare', 'chanter', 'Canta sotto la doccia.', 'Il chante sous la douche.'],
  ['suonare', "jouer (d'un instrument)", 'Suona il piano da bambino.', 'Il joue du piano depuis son enfance.'],
  ['comporre', 'composer', 'Compone la sua prima canzone.', 'Il compose sa première chanson.'],
  ['il compositore', 'le compositeur', 'Il compositore scrive una sinfonia.', 'Le compositeur écrit une symphonie.'],
  ["l'orchestra", "l'orchestre", "L'orchestra suona stasera.", "L'orchestre joue ce soir."],
  ['il coro', 'le chœur', 'Il coro canta in chiesa.', "Le chœur chante à l'église."],
  ['il genere musicale', 'le genre musical', 'Qual è il tuo genere musicale preferito?', 'Quel est ton genre musical préféré ?'],
  ['il jazz', 'le jazz', 'Ama il jazz degli anni Cinquanta.', "Il aime le jazz des années cinquante."],
  ['la musica classica', 'la musique classique', 'Studia musica classica al conservatorio.', 'Il étudie la musique classique au conservatoire.'],
  ['il rock', 'le rock', 'Ascolta rock ad alto volume.', 'Il écoute du rock à fond.'],
];

export const musicCards = buildCards(DECK_ID, rows);
