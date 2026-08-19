import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'falsefriends';

const rows: RawCard[] = [
  ['la camera', 'la chambre (pas la caméra !)', 'La camera da letto è al primo piano.', 'La chambre à coucher est au premier étage.', 'Une caméra vidéo se dit "la videocamera".'],
  ['la firma', "la signature (pas la firme/l'entreprise !)", 'Manca solo la tua firma.', 'Il ne manque que ta signature.', 'Une entreprise se dit "l\'azienda" ou "la ditta".'],
  ['la libreria', 'la librairie, meuble à livres', 'Ho comprato il libro in libreria.', "J'ai acheté le livre à la librairie.", 'La bibliothèque publique se dit "la biblioteca".'],
  ['la biblioteca', 'la bibliothèque publique', 'Studio sempre in biblioteca.', "J'étudie toujours à la bibliothèque.", 'À ne pas confondre avec "la libreria" (la librairie).'],
  ['guardare', 'regarder (pas garder !)', 'Guardo la TV la sera.', 'Je regarde la télé le soir.', 'Garder se dit "custodire" ou "tenere".'],
  ['salire', 'monter (pas salir !)', 'Salgo in macchina.', "Je monte dans la voiture.", 'Salir se dit "sporcare".'],
  ['morbido', 'doux, moelleux (pas morbide !)', 'Il cuscino è morbido.', 'Le coussin est moelleux.', 'Morbide se dit "morboso".'],
  ["l'argomento", 'le sujet, le thème', "Qual è l'argomento della lezione?", 'Quel est le sujet du cours ?', 'L\'argument (preuve) se dit plutôt "l\'argomentazione".'],
  ['educato', 'poli, bien élevé (pas éduqué !)', 'È un ragazzo molto educato.', "C'est un garçon très poli.", 'Éduqué/instruit se dit "istruito".'],
  ['pretendere', 'exiger (pas prétendre !)', 'Pretendo rispetto.', "J'exige du respect.", 'Prétendre/affirmer se dit "sostenere" ou "affermare".'],
  ['il mobile', 'le meuble (pas le mobile !)', 'Questo mobile è antico.', 'Ce meuble est ancien.', 'Le téléphone portable se dit "il cellulare".'],
  ['i confetti', 'les dragées de mariage', 'Distribuiscono i confetti al matrimonio.', 'Ils distribuent les dragées au mariage.', 'Les confettis (papier) se disent "i coriandoli".'],
  ['il sale', 'le sel (pas la salle !)', 'Manca il sale nella zuppa.', 'Il manque du sel dans la soupe.', 'Une salle se dit "la sala".'],
  ['guidare', 'conduire un véhicule', 'Guido la macchina di mio padre.', 'Je conduis la voiture de mon père.', 'Guider quelqu\'un se dit plutôt "fare da guida".'],
  ['confrontare', 'comparer (pas confronter !)', 'Confrontiamo i due prezzi.', 'Comparons les deux prix.', 'Confronter/affronter se dit "affrontare".'],
  ['spiritoso', 'drôle, amusant', 'Fa sempre battute spiritose.', 'Il fait toujours des blagues drôles.', 'Spirituel (religieux) se dit "spirituale".'],
  ['la stanza', 'la pièce, la chambre', 'Questa stanza è luminosa.', 'Cette pièce est lumineuse.', 'Une strophe poétique se dit "la strofa".'],
  ['il vetro', 'le verre (matière, vitre)', 'La finestra ha il vetro rotto.', 'La fenêtre a la vitre cassée.', 'Le verre à boire se dit "il bicchiere".'],
  ['il cartone', 'le carton ; aussi les dessins animés', 'La scatola è di cartone.', 'La boîte est en carton.', "« I cartoni animati » = les dessins animés."],
  ['la fame', 'la faim', 'Ho una fame da lupi.', "J'ai une faim de loup.", 'Attention à l\'oral avec "la femme" en français.'],
  ['il negozio', 'le magasin (pas la négociation !)', 'Il negozio chiude alle otto.', 'Le magasin ferme à huit heures.', 'La négociation se dit "la trattativa".'],
  ['il fattorino', 'le livreur, le coursier', 'Il fattorino ha consegnato il pacco.', 'Le livreur a livré le colis.', 'Le facteur (poste) se dit "il postino".'],
  ['la fabbrica', "l'usine", 'Lavora in una fabbrica di scarpe.', 'Il travaille dans une usine de chaussures.', 'Ne pas confondre avec "la fabrique" au sens religieux, rare en français.'],
  ['la ditta', "l'entreprise, la société", 'La ditta assume nuovo personale.', "L'entreprise embauche du nouveau personnel.", 'Ne pas confondre visuellement avec "la dette" = il debito.'],
  ['rimanere', 'rester (pas "remanier" !)', 'Rimango ancora un\'ora.', 'Je reste encore une heure.', 'Remanier se dit "rimaneggiare".'],
  ['il magazzino', "l'entrepôt, le dépôt (pas le magasin !)", 'La merce è nel magazzino.', "La marchandise est dans l'entrepôt.", 'Le magasin (boutique) se dit "il negozio".'],
];

export const falsefriendsCards = buildCards(DECK_ID, rows);
