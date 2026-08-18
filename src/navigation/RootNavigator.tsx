import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabBar, TabId } from '../components/TabBar';
import { AddCardScreen } from '../screens/AddCardScreen';
import { DeckDetailScreen } from '../screens/DeckDetailScreen';
import { DecksScreen } from '../screens/DecksScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StatsScreen } from '../screens/StatsScreen';
import { StudyScreen } from '../screens/StudyScreen';
import { colors } from '../theme/theme';
import { Screen } from './types';

const TAB_ROOTS: Record<TabId, Screen> = {
  home: { name: 'home' },
  decks: { name: 'decks' },
  stats: { name: 'stats' },
  settings: { name: 'settings' },
};

function screenToTab(screen: Screen): TabId {
  switch (screen.name) {
    case 'decks':
    case 'deckDetail':
      return 'decks';
    case 'stats':
      return 'stats';
    case 'settings':
      return 'settings';
    default:
      return 'home';
  }
}

export function RootNavigator() {
  const [stack, setStack] = useState<Screen[]>([{ name: 'home' }]);
  const current = stack[stack.length - 1];

  const push = (screen: Screen) => setStack((s) => [...s, screen]);
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const selectTab = (tab: TabId) => setStack([TAB_ROOTS[tab]]);
  const goHome = () => setStack([{ name: 'home' }]);

  const showTabBar = stack.length === 1;

  let content: React.ReactNode;
  switch (current.name) {
    case 'home':
      content = <HomeScreen onNavigate={push} />;
      break;
    case 'decks':
      content = <DecksScreen onNavigate={push} />;
      break;
    case 'deckDetail':
      content = <DeckDetailScreen deckId={current.deckId} onNavigate={push} onBack={pop} />;
      break;
    case 'study':
      content = <StudyScreen deckId={current.deckId} onExit={goHome} />;
      break;
    case 'stats':
      content = <StatsScreen />;
      break;
    case 'settings':
      content = <SettingsScreen />;
      break;
    case 'addCard':
      content = <AddCardScreen onBack={pop} />;
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>{content}</View>
      {showTabBar ? <TabBar active={screenToTab(current)} onSelect={selectTab} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
  },
});
