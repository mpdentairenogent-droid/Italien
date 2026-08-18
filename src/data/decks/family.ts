import { buildCards, RawCard } from './makeDeck';

export const DECK_ID = 'family';

const rows: RawCard[] = [
  ['la famiglia', 'la famille', 'Ho una famiglia grande.', "J'ai une grande famille."],
  ['il padre', 'le père', 'Mio padre lavora molto.', 'Mon père travaille beaucoup.'],
  ['la madre', 'la mère', 'Mia madre cucina bene.', 'Ma mère cuisine bien.'],
  ['il figlio', 'le fils', 'Il figlio gioca in giardino.', 'Le fils joue dans le jardin.'],
  ['la figlia', 'la fille', 'La figlia studia medicina.', 'La fille étudie la médecine.'],
  ['il fratello', 'le frère', 'Mio fratello abita a Roma.', 'Mon frère habite à Rome.'],
  ['la sorella', 'la sœur', 'Mia sorella è più giovane.', 'Ma sœur est plus jeune.'],
  ['i genitori', 'les parents', 'I miei genitori sono in vacanza.', 'Mes parents sont en vacances.'],
  ['il nonno', 'le grand-père', 'Il nonno racconta storie belle.', 'Le grand-père raconte de belles histoires.'],
  ['la nonna', 'la grand-mère', 'La nonna fa la pasta fresca.', 'La grand-mère fait des pâtes fraîches.'],
  ['lo zio', "l'oncle", 'Mio zio vive in Sicilia.', 'Mon oncle vit en Sicile.'],
  ['la zia', 'la tante', 'La zia arriva domani.', 'La tante arrive demain.'],
  ['il cugino', 'le cousin', 'Il cugino ha la mia età.', "Le cousin a mon âge."],
  ['la cugina', 'la cousine', 'La cugina studia con me.', 'La cousine étudie avec moi.'],
  ['il marito', 'le mari', 'Suo marito è simpatico.', 'Son mari est sympathique.'],
  ['la moglie', "l'épouse / la femme", 'Sua moglie lavora in banca.', 'Sa femme travaille à la banque.'],
  ['il bambino', "l'enfant / le petit garçon", 'Il bambino dorme.', "L'enfant dort."],
  ['gli amici', 'les amis', 'I miei amici sono simpatici.', 'Mes amis sont sympathiques.'],
];

export const familyCards = buildCards(DECK_ID, rows);
