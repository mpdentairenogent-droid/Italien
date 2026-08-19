import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'relationships';

const rows: RawCard[] = [
  ["l'amico", "l'ami", "L'amico mi ha aiutato molto.", "L'ami m'a beaucoup aidé."],
  ['il fidanzato', 'le petit ami', 'Il mio fidanzato è molto gentile.', 'Mon petit ami est très gentil.'],
  ['la fidanzata', 'la petite amie', 'La sua fidanzata vive a Roma.', 'Sa petite amie vit à Rome.'],
  ['il migliore amico', 'le meilleur ami', 'È il mio migliore amico.', "C'est mon meilleur ami."],
  ["l'ex", "l'ex", "Ho incontrato il mio ex.", "J'ai croisé mon ex."],
  ['il primo appuntamento', 'le premier rendez-vous', 'Ricordo il nostro primo appuntamento.', 'Je me souviens de notre premier rendez-vous.'],
  ['innamorarsi', 'tomber amoureux', 'Ci siamo innamorati subito.', 'On est tombés amoureux tout de suite.'],
  ['sposarsi', 'se marier', 'Vogliono sposarsi in estate.', 'Ils veulent se marier en été.'],
  ['il matrimonio', 'le mariage', 'Il matrimonio è stato bellissimo.', 'Le mariage était magnifique.'],
  ['divorziare', 'divorcer', 'Hanno deciso di divorziare.', 'Ils ont décidé de divorcer.'],
  ['il divorzio', 'le divorce', 'Il divorzio è stato difficile.', 'Le divorce a été difficile.'],
  ['fidanzarsi', 'se fiancer', 'Si sono fidanzati a Natale.', 'Ils se sont fiancés à Noël.'],
  ['il fidanzamento', 'les fiançailles', 'Festeggiamo il fidanzamento.', 'On fête les fiançailles.'],
  ['rompere', 'rompre', 'Hanno rotto dopo un anno.', 'Ils ont rompu après un an.'],
  ['la relazione', 'la relation', 'La loro relazione è solida.', 'Leur relation est solide.'],
  ["l'amicizia", "l'amitié", "La nostra amicizia dura da anni.", "Notre amitié dure depuis des années."],
  ['la fiducia', 'la confiance', 'Ho fiducia in te.', "J'ai confiance en toi."],
  ['tradire', 'tromper', 'Non lo tradirei mai.', 'Je ne le tromperais jamais.'],
  ['perdonare', 'pardonner', 'Ti perdono.', 'Je te pardonne.'],
  ['abbracciare', 'serrer dans ses bras', 'Ci siamo abbracciati forte.', "On s'est serrés fort dans les bras."],
  ['baciare', 'embrasser (un baiser)', 'Si sono baciati sotto la pioggia.', 'Ils se sont embrassés sous la pluie.'],
  ['il bacio', 'le baiser', 'Le ha dato un bacio.', 'Il lui a donné un baiser.'],
  ["l'abbraccio", "l'étreinte", 'Un abbraccio caloroso.', 'Une étreinte chaleureuse.'],
  ['mancare', 'manquer (à quelqu\'un)', 'Mi manchi molto.', 'Tu me manques beaucoup.'],
  ['la coppia', 'le couple', 'Sono una bella coppia.', 'Ils forment un beau couple.'],
  ['single', 'célibataire', 'È single da un anno.', 'Il est célibataire depuis un an.'],
  ['conoscersi', 'faire connaissance', 'Ci siamo conosciuti a una festa.', 'On a fait connaissance à une fête.'],
];

export const relationshipsCards = buildCards(DECK_ID, rows);
