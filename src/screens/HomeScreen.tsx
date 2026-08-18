import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { DeckCard } from '../components/DeckCard';
import { LoadingView } from '../components/LoadingView';
import { StatTile } from '../components/StatTile';
import { Navigate } from '../navigation/types';
import { useAppState } from '../state/AppState';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';

export function HomeScreen({ onNavigate }: { onNavigate: Navigate }) {
  const { loading, stats, streak, decks, deckSummary, studyQueueFor } = useAppState();
  const insets = useSafeAreaInsets();

  if (loading) return <LoadingView />;

  const queue = studyQueueFor();
  const dueCount = queue.length;
  const decksWithDue = decks
    .map((d) => ({ deck: d, summary: deckSummary(d.id) }))
    .sort((a, b) => b.summary.due - a.summary.due)
    .slice(0, 4);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greeting}>Ciao! 🇮🇹</Text>
          <Text style={styles.subGreeting}>Prêt à apprendre l'italien ?</Text>
        </View>
        <View style={styles.streakPill}>
          <Text style={styles.streakText}>🔥 {streak.currentStreak}</Text>
        </View>
      </View>

      <View style={[styles.heroCard, shadow.floating]}>
        <Text style={styles.heroEmoji}>{dueCount > 0 ? '🎯' : '✅'}</Text>
        <Text style={styles.heroTitle}>
          {dueCount > 0 ? `${dueCount} carte${dueCount > 1 ? 's' : ''} à réviser` : 'Tout est à jour !'}
        </Text>
        <Text style={styles.heroSubtitle}>
          {dueCount > 0
            ? 'Un peu de pratique chaque jour fait toute la différence.'
            : 'Revenez plus tard ou explorez un nouveau paquet.'}
        </Text>
        <Button
          label={dueCount > 0 ? 'Commencer la révision' : 'Réviser quand même'}
          icon="⚡️"
          variant="secondary"
          onPress={() => onNavigate({ name: 'study' })}
        />
      </View>

      <View style={styles.statsGrid}>
        <StatTile icon="🗂️" label="Cartes maîtrisées" value={stats.matureCount} accent={colors.primary} />
        <StatTile
          icon="📈"
          label="Rétention"
          value={stats.retentionRate != null ? `${stats.retentionRate}%` : '—'}
          accent={colors.blue}
        />
        <StatTile icon="🔥" label="Série en cours" value={`${streak.currentStreak} j`} accent={colors.gold} />
        <StatTile icon="✏️" label="Révisées aujourd'hui" value={stats.reviewedToday} accent={colors.accent} />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Paquets à réviser</Text>
        <Text style={styles.sectionLink} onPress={() => onNavigate({ name: 'decks' })}>
          Voir tout
        </Text>
      </View>

      {decksWithDue.map(({ deck, summary }) => (
        <DeckCard key={deck.id} deck={deck} summary={summary} onPress={() => onNavigate({ name: 'deckDetail', deckId: deck.id })} />
      ))}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xl,
  },
  greeting: {
    ...typography.h1,
    color: colors.textPrimary,
  },
  subGreeting: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: 2,
  },
  streakPill: {
    backgroundColor: colors.goldLight,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  streakText: {
    ...typography.bodyBold,
    color: '#8A5A00',
  },
  heroCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.xl,
    padding: spacing.xxl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  heroEmoji: {
    fontSize: 36,
    marginBottom: spacing.sm,
  },
  heroTitle: {
    ...typography.h2,
    color: colors.white,
    textAlign: 'center',
  },
  heroSubtitle: {
    ...typography.small,
    color: colors.primaryLight,
    textAlign: 'center',
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
    marginTop: spacing.sm,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
  },
  sectionLink: {
    ...typography.smallBold,
    color: colors.primary,
  },
});
