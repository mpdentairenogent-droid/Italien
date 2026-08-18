import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DeckCard } from '../components/DeckCard';
import { LoadingView } from '../components/LoadingView';
import { Navigate } from '../navigation/types';
import { useAppState } from '../state/AppState';
import { colors, spacing, typography } from '../theme/theme';

export function DecksScreen({ onNavigate }: { onNavigate: Navigate }) {
  const { loading, decks, deckSummary } = useAppState();
  const insets = useSafeAreaInsets();

  if (loading) return <LoadingView />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Paquets</Text>
      <Text style={styles.subtitle}>{decks.length} thèmes pour progresser en italien</Text>

      <View style={styles.list}>
        {decks.map((deck) => (
          <DeckCard
            key={deck.id}
            deck={deck}
            summary={deckSummary(deck.id)}
            onPress={() => onNavigate({ name: 'deckDetail', deckId: deck.id })}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  list: {
    marginTop: spacing.sm,
  },
});
