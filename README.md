# Italien Flashcards 🇮🇹

Application mobile (iPhone) de flashcards **intelligentes** pour apprendre l'italien, basée sur la répétition espacée (algorithme dérivé de SM-2, le même principe que Anki).

## Fonctionnalités

- **Répétition espacée intelligente** : chaque carte a son propre intervalle de révision qui s'allonge automatiquement quand vous la maîtrisez, et se raccourcit quand vous la ratez. Les cartes en retard sont toujours proposées en priorité.
- **216 cartes prêtes à l'emploi** réparties en 12 thèmes : salutations, nombres, famille, nourriture, couleurs, temps, verbes courants, voyage, corps/santé, maison/vêtements, adjectifs, phrases utiles. Chaque carte inclut une phrase d'exemple traduite.
- **Cartes personnalisées** : ajoutez votre propre vocabulaire dans le paquet « Mes cartes ».
- **Séance quotidienne intelligente** : mélange automatiquement les cartes à réviser et un nombre limité de nouvelles cartes par jour (réglable), pour ne jamais vous submerger.
- **Statistiques** : série de jours consécutifs, taux de rétention, répartition nouvelles/en apprentissage/récentes/maîtrisées, détection des cartes difficiles (« leech »).
- **Retour haptique** et animation de retournement de carte façon flashcard physique.
- Toutes les données sont stockées **localement sur l'appareil** (aucun compte, aucun serveur).

## Stack technique

- [Expo](https://expo.dev) (SDK 57) + React Native + TypeScript
- Navigation maison légère (pas de dépendance react-navigation) avec barre d'onglets iOS-like
- `@react-native-async-storage/async-storage` pour la persistance locale
- `react-native-safe-area-context` pour la gestion des zones sûres (encoche, etc.)
- `expo-haptics` pour les vibrations

Aucun backend requis.

## Lancer l'application sur votre iPhone

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

Vous pouvez aussi lancer `npm run ios` si vous développez depuis un Mac avec Xcode installé (simulateur iOS).

## Publier une vraie app (App Store / TestFlight)

Ce conteneur de développement n'a pas accès à Xcode/macOS, donc la compilation native iOS doit se faire via le service cloud d'Expo :

```bash
npm install -g eas-cli
eas login
eas build --platform ios
```

Cela nécessite un compte Apple Developer (99 $/an) pour distribuer via TestFlight ou l'App Store. `eas build` compile tout dans le cloud, aucun Mac n'est nécessaire.

## Structure du projet

```
src/
  types/        Types TypeScript partagés (Flashcard, CardProgress, etc.)
  theme/        Palette de couleurs, espacements, typographie
  data/decks/   Le vocabulaire italien, un fichier par thème
  srs/          Algorithme de répétition espacée (SM-2 adapté)
  storage/      Persistance AsyncStorage
  state/        Contexte React global (reducer, sélecteurs, actions)
  components/   Composants UI réutilisables (FlipCard, boutons, etc.)
  screens/      Les écrans de l'app (Accueil, Révision, Paquets, Stats, Réglages, Ajout de carte)
  navigation/   Navigateur maison (pile d'écrans + barre d'onglets)
```

## Personnaliser l'icône et l'écran de démarrage

Les icônes dans `assets/` sont celles par défaut d'Expo. Remplacez `assets/icon.png`, `assets/splash-icon.png` et les icônes Android pour personnaliser l'identité visuelle de l'app.

## Comment fonctionne l'algorithme

Après avoir retourné une carte, vous la notez : **Encore**, **Difficile**, **Bien** ou **Facile**. Chaque bouton affiche un aperçu du prochain intervalle. En coulisses :

- **Encore** : la carte revient dans la séance en cours après quelques autres cartes, et son intervalle repart à 1 jour.
- **Difficile / Bien / Facile** : l'intervalle grandit (1j → 6j → 2-3 semaines → mois…) selon un facteur de facilité propre à chaque carte, qui augmente ou diminue selon vos réponses.

Une carte est considérée comme « maîtrisée » quand son intervalle dépasse 21 jours — c'est à ce moment-là qu'elle compte dans vos statistiques comme apprise durablement.
