import * as Haptics from 'expo-haptics';
import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { FlipCard } from '../components/FlipCard';
import { GradeButtons } from '../components/GradeButtons';
import { LoadingView } from '../components/LoadingView';
import { ProgressBar } from '../components/ProgressBar';
import { createInitialProgress } from '../srs/sm2';
import { useAppState } from '../state/AppState';
import { colors, spacing, typography } from '../theme/theme';
import { DeckId, Flashcard, Grade } from '../types';

function safeHaptic(fn: () => Promise<void>) {
  fn().catch(() => {});
}

export function StudyScreen({ deckId, onExit }: { deckId?: DeckId; onExit: () => void }) {
  const { loading, decks, progress, settings, reviewCard, studyQueueFor } = useAppState();
  const insets = useSafeAreaInsets();

  const [queue, setQueue] = useState<Flashcard[] | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [againCount, setAgainCount] = useState(0);

  useEffect(() => {
    if (!loading && queue === null) {
      setQueue(studyQueueFor(deckId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const deckName = deckId ? decks.find((d) => d.id === deckId)?.name : 'tous les paquets';

  const current = queue && index < queue.length ? queue[index] : null;
  const currentProgress = useMemo(
    () => (current ? progress[current.id] ?? createInitialProgress(current.id) : null),
    [current, progress]
  );

  if (loading || queue === null) return <LoadingView />;

  const handleFlip = () => {
    if (settings.hapticsEnabled) safeHaptic(() => Haptics.selectionAsync());
    setFlipped((f) => !f);
  };

  const handleGrade = (grade: Grade) => {
    if (!current) return;
    reviewCard(current.id, current.deckId, grade);

    if (settings.hapticsEnabled) {
      if (grade === 'again') safeHaptic(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning));
      else if (grade === 'hard') safeHaptic(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light));
      else safeHaptic(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success));
    }

    setReviewedCount((c) => c + 1);

    if (grade === 'again') {
      setAgainCount((c) => c + 1);
      setQueue((q) => {
        if (!q) return q;
        const rest = q.slice(index + 1);
        const insertAt = Math.min(rest.length, 3);
        return [...q.slice(0, index + 1), ...rest.slice(0, insertAt), current, ...rest.slice(insertAt)];
      });
    }

    setFlipped(false);
    setIndex((i) => i + 1);
  };

  const isSessionComplete = queue.length === 0 || index >= queue.length;

  if (isSessionComplete) {
    const successRate = reviewedCount > 0 ? Math.round(((reviewedCount - againCount) / reviewedCount) * 100) : null;
    return (
      <View style={[styles.container, styles.centered, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <Text style={styles.completeEmoji}>{reviewedCount > 0 ? '🎉' : '👍'}</Text>
        <Text style={styles.completeTitle}>{reviewedCount > 0 ? 'Session terminée !' : 'Rien à réviser'}</Text>
        <Text style={styles.completeSubtitle}>
          {reviewedCount > 0
            ? `${reviewedCount} carte${reviewedCount > 1 ? 's' : ''} révisée${reviewedCount > 1 ? 's' : ''}${
                successRate != null ? ` · ${successRate}% de réussite` : ''
              }`
            : "Vous êtes à jour sur ce paquet. Revenez plus tard ou explorez un autre thème."}
        </Text>
        <Button label="Retour à l'accueil" onPress={onExit} style={styles.completeButton} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={onExit} hitSlop={12} style={styles.closeButton}>
          <Text style={styles.closeIcon}>✕</Text>
        </Pressable>
        <View style={styles.progressWrap}>
          <ProgressBar percent={(index / queue.length) * 100} />
        </View>
        <Text style={styles.counter}>
          {index + 1}/{queue.length}
        </Text>
      </View>

      <Text style={styles.deckLabel}>{deckName}</Text>

      <View style={styles.cardArea}>
        {current ? <FlipCard card={current} flipped={flipped} onPress={handleFlip} /> : null}
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, spacing.lg) }]}>
        {flipped && currentProgress ? (
          <GradeButtons progress={currentProgress} onGrade={handleGrade} />
        ) : (
          <Button label="Afficher la réponse" variant="secondary" onPress={handleFlip} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  progressWrap: {
    flex: 1,
  },
  counter: {
    ...typography.smallBold,
    color: colors.textSecondary,
    minWidth: 40,
    textAlign: 'right',
  },
  deckLabel: {
    ...typography.small,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  cardArea: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    paddingTop: spacing.lg,
  },
  completeEmoji: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  completeTitle: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  completeSubtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.xl,
  },
  completeButton: {
    width: '80%',
  },
});
