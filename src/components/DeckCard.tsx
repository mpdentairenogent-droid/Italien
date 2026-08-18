import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';
import { Deck } from '../types';
import { DeckProgressSummary } from '../state/selectors';
import { ProgressBar } from './ProgressBar';

interface Props {
  deck: Deck;
  summary: DeckProgressSummary;
  onPress: () => void;
}

export function DeckCard({ deck, summary, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, shadow.card, pressed && styles.pressed]}>
      <View style={styles.emojiBadge}>
        <Text style={styles.emoji}>{deck.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{deck.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {deck.description}
        </Text>
        <View style={styles.progressRow}>
          <ProgressBar percent={summary.percentLearned} />
          <Text style={styles.percent}>{summary.percentLearned}%</Text>
        </View>
      </View>
      {summary.due > 0 ? (
        <View style={styles.dueBadge}>
          <Text style={styles.dueText}>{summary.due}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  pressed: {
    opacity: 0.75,
  },
  emojiBadge: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.lg,
  },
  emoji: {
    fontSize: 22,
  },
  info: {
    flex: 1,
  },
  name: {
    ...typography.bodyBold,
    color: colors.textPrimary,
  },
  description: {
    ...typography.small,
    color: colors.textSecondary,
    marginTop: 1,
    marginBottom: spacing.sm,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  percent: {
    ...typography.caption,
    color: colors.textSecondary,
    width: 32,
  },
  dueBadge: {
    marginLeft: spacing.sm,
    backgroundColor: colors.accent,
    minWidth: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  dueText: {
    ...typography.smallBold,
    color: colors.white,
  },
});
