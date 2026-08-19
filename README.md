# Italien Flashcards 🇮🇹

Application mobile (iPhone) de flashcards **intelligentes** pour apprendre l'italien, basée sur la répétition espacée (algorithme dérivé de SM-2, le même principe que Anki).

## Fonctionnalités

- **Répétition espacée intelligente** : chaque carte a son propre intervalle de révision qui s'allonge automatiquement quand vous la maîtrisez, et se raccourcit quand vous la ratez. Les cartes en retard sont toujours proposées en priorité.
- **Plus de 1500 cartes prêtes à l'emploi** (1518 exactement) réparties en 44 thèmes : bases, nombres, famille, nourriture, couleurs, temps, verbes, voyage, corps/santé, maison, adjectifs, phrases utiles, animaux, nature, météo, métiers, école, travail, technologie, ville, transports, sport, musique, cinéma/séries, émotions, personnalité, shopping, cuisine, fruits/légumes, restaurant, relations amoureuses, calendrier, grands nombres, géographie/nationalités, société, argent, meubles, adjectifs et verbes avancés, adverbes, expressions idiomatiques, et même un paquet dédié aux **faux amis italien-français**. Chaque carte inclut une phrase d'exemple traduite.
- **Cartes personnalisées** : ajoutez votre propre vocabulaire dans le paquet « Mes cartes ».
- **Séance quotidienne intelligente** : mélange automatiquement les cartes à réviser et un nombre limité de nouvelles cartes par jour (réglable), pour ne jamais vous submerger.
- **Statistiques** : série de jours consécutifs, taux de rétention, répartition nouvelles/en apprentissage/récentes/maîtrisées, détection des cartes difficiles (« leech »).
- **Retour haptique** et animation de retournement de carte façon flashcard physique.
- **Compte personnel + sauvegarde cloud (Supabase)** : vos données sont toujours écrites en local d'abord (l'app fonctionne hors ligne), puis synchronisées avec votre compte Supabase. Réinstallez l'app ou changez d'iPhone, reconnectez-vous, et vous retrouvez toute votre progression.

## Stack technique

- [Expo](https://expo.dev) (SDK 56) + React Native + TypeScript
- Navigation maison légère (pas de dépendance react-navigation) avec barre d'onglets iOS-like
- `@react-native-async-storage/async-storage` pour le cache local (fonctionne hors ligne)
- `@supabase/supabase-js` pour l'authentification et la sauvegarde cloud de la progression
- `react-native-safe-area-context` pour la gestion des zones sûres (encoche, etc.)
- `expo-haptics` pour les vibrations

L'app fonctionne même sans Supabase configuré (tout reste alors en local sur l'appareil, sans compte).

## Configurer Supabase (compte personnel + sauvegarde cloud)

L'app peut fonctionner sans Supabase (tout reste en local), mais pour avoir un compte et ne jamais perdre votre progression :

1. Créez un compte gratuit sur [supabase.com](https://supabase.com) et créez un nouveau projet.
2. Dans **SQL Editor**, ouvrez `supabase/schema.sql` (dans ce dépôt), collez son contenu et exécutez-le. Cela crée la table `app_state` où votre progression sera sauvegardée, protégée par des règles de sécurité (Row Level Security) qui garantissent que vous seul pouvez lire/écrire vos propres données.
3. Dans **Authentication → Providers → Email**, si vous voulez éviter l'email de confirmation à l'inscription (recommandé pour un usage strictement personnel), désactivez **Confirm email**. Sinon, vous devrez cliquer le lien reçu par email avant de pouvoir vous connecter la première fois.
4. Dans **Settings → API**, récupérez l'**URL du projet** et la clé **anon public**.
5. À la racine du projet, copiez `.env.example` vers `.env` et remplissez les deux valeurs :
   ```bash
   cp .env.example .env
   ```
   ```
   EXPO_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
   ```
6. Relancez `npm start` (ou refaites un build). Au premier lancement, l'app vous demande de créer votre compte (email + mot de passe) : c'est votre compte personnel, il n'est visible de personne d'autre.

Sans ce fichier `.env`, l'app démarre directement sans écran de connexion et fonctionne uniquement en local — pratique pour tester avant d'activer la synchronisation.

## Lancer l'application en développement (Expo Go)

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Démarrez le serveur de développement :
   ```bash
   npm start
   ```
3. Sur votre iPhone, installez l'application **Expo Go** depuis l'App Store.
4. Scannez le QR code affiché dans le terminal avec l'appareil photo de l'iPhone (ou l'app Expo Go) : l'application s'ouvre directement, sans compilation native.

C'est le moyen le plus rapide de tester l'app et vos changements, mais Expo Go reste une app "conteneur" tierce. Pour une vraie installation permanente et privée sur votre iPhone (icône sur l'écran d'accueil, hors Expo Go), suivez la section suivante.

## Installer l'app sur votre iPhone en privé (hors App Store public)

Ce que vous voulez, c'est une app installée sur votre iPhone personnel, sans qu'elle soit jamais publiée ni visible publiquement sur l'App Store. Le chemin le plus simple pour ça s'appelle la **distribution interne EAS** : Expo compile l'app dans le cloud (pas besoin de Mac) et vous donne un lien à ouvrir depuis votre iPhone pour l'installer directement, exactement comme TestFlight mais sans même passer par une fiche App Store Connect.

**Prérequis incontournable : un compte [Apple Developer Program](https://developer.apple.com/programs/) (99 $/an).** C'est Apple qui l'exige pour signer une app installable sur un vrai iPhone au-delà de 7 jours — il n'existe pas de contournement gratuit durable. C'est le même compte que vous garderiez pour publier sur l'App Store plus tard si vous changez d'avis.

Étapes :

```bash
npm install -g eas-cli
eas login              # connectez-vous avec votre compte Expo (gratuit, créez-en un sur expo.dev si besoin)
eas build:configure    # première fois seulement : crée/relie le projet EAS
eas build --platform ios --profile preview
```

- `eas build` va vous demander de vous connecter avec votre **Apple ID** (celui lié à votre compte Apple Developer) et enregistrera votre iPhone (il vous guide pour scanner un QR code afin de récupérer l'identifiant de l'appareil).
- Une fois le build terminé (10-20 min), EAS vous donne un lien. Ouvrez-le **depuis Safari sur votre iPhone** et suivez les instructions d'installation.
- La première fois, allez ensuite dans **Réglages → Général → VPN et gestion des appareils** sur l'iPhone pour faire confiance au profil de développeur.
- Le profil `preview` produit un build "ad-hoc" valable environ un an, réinstallable simplement en relançant la même commande après des changements.

**Alternative : TestFlight.** Si vous préférez passer par l'app TestFlight (installée depuis l'App Store) plutôt que par un lien Safari, utilisez `eas build --platform ios --profile production` puis `eas submit --platform ios`. Le compte Apple Developer reste nécessaire, et vous restez seul testeur interne (personne d'autre n'y a accès, l'app n'est jamais rendue publique).

## Structure du projet

```
src/
  types/        Types TypeScript partagés (Flashcard, CardProgress, etc.)
  theme/        Palette de couleurs, espacements, typographie
  data/decks/   Le vocabulaire italien, un fichier par thème
  srs/          Algorithme de répétition espacée (SM-2 adapté)
  storage/      Cache local AsyncStorage
  supabase/     Client Supabase + synchronisation cloud (push/pull de l'état)
  auth/         Contexte d'authentification (connexion/inscription/déconnexion)
  state/        Contexte React global (reducer, sélecteurs, actions)
  components/   Composants UI réutilisables (FlipCard, boutons, etc.)
  screens/      Les écrans de l'app (Connexion, Accueil, Révision, Paquets, Stats, Réglages, Ajout de carte)
  navigation/   Navigateur maison (pile d'écrans + barre d'onglets)
supabase/
  schema.sql    Schéma SQL à exécuter une fois dans votre projet Supabase
```

## Personnaliser l'icône et l'écran de démarrage

Les icônes dans `assets/` sont celles par défaut d'Expo. Remplacez `assets/icon.png`, `assets/splash-icon.png` et les icônes Android pour personnaliser l'identité visuelle de l'app.

## Comment fonctionne l'algorithme

Après avoir retourné une carte, vous la notez : **Encore**, **Difficile**, **Bien** ou **Facile**. Chaque bouton affiche un aperçu du prochain intervalle. En coulisses :

- **Encore** : la carte revient dans la séance en cours après quelques autres cartes, et son intervalle repart à 1 jour.
- **Difficile / Bien / Facile** : l'intervalle grandit (1j → 6j → 2-3 semaines → mois…) selon un facteur de facilité propre à chaque carte, qui augmente ou diminue selon vos réponses.

Une carte est considérée comme « maîtrisée » quand son intervalle dépasse 21 jours — c'est à ce moment-là qu'elle compte dans vos statistiques comme apprise durablement.
