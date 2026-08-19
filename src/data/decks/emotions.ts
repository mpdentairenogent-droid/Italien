import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'emotions';

const rows: RawCard[] = [
  ['arrabbiato', 'fâché / en colère', 'È arrabbiato con me.', "Il est fâché contre moi."],
  ['contento', 'content', 'Sono contento del risultato.', 'Je suis content du résultat.'],
  ['stanco', 'fatigué', 'Sono stanco dopo il lavoro.', 'Je suis fatigué après le travail.'],
  ['annoiato', 'ennuyé', 'Sembra annoiato oggi.', "Il a l'air ennuyé aujourd'hui."],
  ['sorpreso', 'surpris', 'Sono sorpreso dalla notizia.', 'Je suis surpris par la nouvelle.'],
  ['spaventato', 'effrayé', 'Il bambino è spaventato dal buio.', "L'enfant a peur du noir."],
  ['preoccupato', 'inquiet', 'Sono preoccupato per lei.', "Je suis inquiet pour elle."],
  ['nervoso', 'nerveux', 'È nervoso prima dell\'esame.', "Il est nerveux avant l'examen."],
  ['calmo', 'calme', 'Resta calmo, per favore.', "Reste calme, s'il te plaît."],
  ['rilassato', 'détendu', 'Mi sento rilassato in vacanza.', 'Je me sens détendu en vacances.'],
  ['emozionato', 'ému / excité', 'Sono emozionato per il viaggio.', 'Je suis excité pour le voyage.'],
  ['orgoglioso', 'fier', 'Sono orgoglioso di te.', 'Je suis fier de toi.'],
  ['geloso', 'jaloux', 'Non essere geloso.', 'Ne sois pas jaloux.'],
  ['imbarazzato', 'gêné', 'Mi sento imbarazzato a parlare in pubblico.', 'Je me sens gêné de parler en public.'],
  ['confuso', 'confus', 'Sono confuso, puoi ripetere?', 'Je suis confus, peux-tu répéter ?'],
  ['deluso', 'déçu', 'Sono deluso dal film.', 'Je suis déçu par le film.'],
  ['grato', 'reconnaissant', 'Ti sono grato per il tuo aiuto.', 'Je te suis reconnaissant pour ton aide.'],
  ['speranzoso', "plein d'espoir", 'Sono speranzoso per il futuro.', "Je suis plein d'espoir pour l'avenir."],
  ['innamorato', 'amoureux', 'È innamorato di lei.', 'Il est amoureux d\'elle.'],
  ['solo', 'seul', 'Mi sento solo qualche volta.', 'Je me sens seul parfois.'],
  ['curioso', 'curieux', 'Sono curioso di sapere di più.', "Je suis curieux d'en savoir plus."],
  ['timido', 'timide', 'È timido con gli sconosciuti.', 'Il est timide avec les inconnus.'],
  ['coraggioso', 'courageux', 'È stato molto coraggioso.', 'Il a été très courageux.'],
  ['la felicità', 'le bonheur', 'La felicità è semplice a volte.', 'Le bonheur est simple parfois.'],
  ['la tristezza', 'la tristesse', 'La tristezza passa col tempo.', 'La tristesse passe avec le temps.'],
  ['la paura', 'la peur', 'Ho paura dei ragni.', "J'ai peur des araignées."],
  ['la rabbia', 'la colère', 'Non riesco a controllare la rabbia.', 'Je n\'arrive pas à contrôler ma colère.'],
  ["l'ansia", "l'anxiété", "L'ansia mi impedisce di dormire.", "L'anxiété m'empêche de dormir."],
  ['lo stress', 'le stress', 'Lo stress fa male alla salute.', 'Le stress est mauvais pour la santé.'],
  ["l'amore", "l'amour", "L'amore vince tutto.", "L'amour triomphe de tout."],
  ['la gioia', 'la joie', 'Piange di gioia.', 'Il pleure de joie.'],
  ['sorridere', 'sourire', 'Sorride sempre a tutti.', 'Il sourit toujours à tout le monde.'],
  ['il sorriso', 'le sourire', 'Ha un bel sorriso.', 'Elle a un beau sourire.'],
  ['affettuoso', 'affectueux', 'È molto affettuoso con i nipoti.', 'Il est très affectueux avec ses petits-enfants.'],
  ['sensibile', 'sensible', 'È una persona molto sensibile.', 'C\'est une personne très sensible.'],
];

export const emotionsCards = buildCards(DECK_ID, rows);
