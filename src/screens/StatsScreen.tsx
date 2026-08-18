import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoadingView } from '../components/LoadingView';
import { StatTile } from '../components/StatTile';
import { useAppState } from '../state/AppState';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';

const MATURITY_META = [
  { key: 'newCount' as const, label: 'Nouvelles', color: colors.textSecondary },
  { key: 'learningCount' as const, label: 'En apprentissage', color: colors.gold },
  { key: 'youngCount' as const, label: 'Récentes', color: colors.blue },
  { key: 'matureCount' as const, label: 'Maîtrisées', color: colors.primary },
];

export function StatsScreen() {
  const { loading, stats, streak } = useAppState();
  const insets = useSafeAreaInsets();

  if (loading) return <LoadingView />;

  const total = Math.max(1, stats.totalCards);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Statistiques</Text>
      <Text style={styles.subtitle}>Votre progression en italien</Text>

      <View style={styles.statsGrid}>
        <StatTile icon="📚" label="Cartes totales" value={stats.totalCards} />
        <StatTile icon="⏰" label="À réviser" value={stats.dueToday} accent={colors.accent} />
        <StatTile icon="🔥" label="Série actuelle" value={`${streak.currentStreak} j`} accent={colors.gold} />
        <StatTile icon="🏆" label="Meilleure série" value={`${streak.bestStreak} j`} accent={colors.gold} />
        <StatTile
          icon="📈"
          label="Rétention"
          value={stats.retentionRate != null ? `${stats.retentionRate}%` : '—'}
          accent={colors.blue}
        />
        <StatTile icon="✅" label="Révisions totales" value={stats.reviewsAllTime} accent={colors.primary} />
      </View>

      <View style={[styles.card, shadow.card]}>
        <Text style={styles.cardTitle}>Répartition des cartes</Text>
        <View style={styles.stackedBar}>
          {MATURITY_META.map(({ key, color }) => {
            const value = stats[key];
            if (value === 0) return null;
            return <View key={key} style={{ flex: value, backgroundColor: color }} />;
          })}
        </View>
        <View style={styles.legend}>
          {MATURITY_META.map(({ key, label, color }) => (
            <View key={key} style={styles.legendRow}>
              <View style={styles.legendLeft}>
                <View style={[styles.legendDot, { backgroundColor: color }]} />
                <Text style={styles.legendLabel}>{label}</Text>
              </View>
              <Text style={styles.legendValue}>
                {stats[key]} · {Math.round((stats[key] / total) * 100)}%
              </Text>
            </View>
          ))}
        </View>
      </View>

      {stats.leechCount > 0 ? (
        <View style={[styles.card, shadow.card, styles.leechCard]}>
          <Text style={styles.cardTitle}>🌿 Cartes difficiles</Text>
          <Text style={styles.leechText}>
            {stats.leechCount} carte{stats.leechCount > 1 ? 's' : ''} {stats.leechCount > 1 ? 'reviennent' : 'revient'}{' '}
            souvent. Prenez le temps de créer une association mentale pour mieux les retenir.
          </Text>
        </View>
      ) : null}

      <View style={[styles.card, shadow.card]}>
        <Text style={styles.cardTitle}>💡 Le saviez-vous ?</Text>
        <Text style={styles.tipText}>
          L'algorithme espace automatiquement les révisions : plus vous maîtrisez une carte, plus l'intervalle avant
          de la revoir s'allonge. C'est la méthode la plus efficace pour mémoriser sur le long terme.
        </Text>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  cardTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  stackedBar: {
    flexDirection: 'row',
    height: 14,
    borderRadius: radius.pill,
    overflow: 'hidden',
    backgroundColor: colors.surfaceSunken,
    marginBottom: spacing.lg,
  },
  legend: {
    gap: spacing.sm,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  legendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendLabel: {
    ...typography.small,
    color: colors.textPrimary,
  },
  legendValue: {
    ...typography.smallBold,
    color: colors.textSecondary,
  },
  leechCard: {
    backgroundColor: colors.goldLight,
  },
  leechText: {
    ...typography.small,
    color: '#6B4A00',
    lineHeight: 20,
  },
  tipText: {
    ...typography.small,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
