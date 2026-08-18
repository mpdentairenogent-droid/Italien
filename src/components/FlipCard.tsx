import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';
import { Flashcard } from '../types';

interface Props {
  card: Flashcard;
  flipped: boolean;
  onPress: () => void;
}

export function FlipCard({ card, flipped, onPress }: Props) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: flipped ? 1 : 0,
      friction: 9,
      tension: 45,
      useNativeDriver: true,
    }).start();
  }, [flipped, anim]);

  const frontInterpolate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backInterpolate = anim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
  const frontOpacity = anim.interpolate({ inputRange: [0, 0.5, 0.51, 1], outputRange: [1, 1, 0, 0] });
  const backOpacity = anim.interpolate({ inputRange: [0, 0.49, 0.5, 1], outputRange: [0, 0, 1, 1] });

  return (
    <Pressable onPress={onPress} style={styles.wrapper} accessibilityRole="button">
      <Animated.View
        style={[
          styles.face,
          shadow.floating,
          { opacity: frontOpacity, transform: [{ perspective: 1200 }, { rotateY: frontInterpolate }] },
        ]}
      >
        <Text style={styles.eyebrow}>ITALIEN</Text>
        <Text style={styles.word}>{card.italian}</Text>
        <View style={styles.hintPill}>
          <Text style={styles.hint}>Touchez pour révéler</Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.face,
          styles.faceBack,
          shadow.floating,
          { opacity: backOpacity, transform: [{ perspective: 1200 }, { rotateY: backInterpolate }] },
        ]}
      >
        <Text style={[styles.eyebrow, styles.eyebrowBack]}>FRANÇAIS</Text>
        <Text style={styles.wordBack}>{card.french}</Text>
        {card.example ? (
          <View style={styles.exampleBox}>
            <Text style={styles.exampleIt}>{card.example}</Text>
            {card.exampleFr ? <Text style={styles.exampleFr}>{card.exampleFr}</Text> : null}
          </View>
        ) : null}
        {card.note ? <Text style={styles.note}>💡 {card.note}</Text> : null}
      </Animated.View>
    </Pressable>
  );
}

const CARD_HEIGHT = 340;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: CARD_HEIGHT,
  },
  face: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: radius.xl,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
    backfaceVisibility: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  faceBack: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
  },
  eyebrow: {
    ...typography.caption,
    letterSpacing: 2,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  eyebrowBack: {
    color: colors.primaryLight,
  },
  word: {
    ...typography.h1,
    fontSize: 34,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  wordBack: {
    ...typography.h1,
    fontSize: 30,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  hintPill: {
    position: 'absolute',
    bottom: spacing.xl,
    backgroundColor: colors.surfaceAlt,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
  },
  hint: {
    ...typography.small,
    color: colors.textSecondary,
  },
  exampleBox: {
    marginTop: spacing.md,
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderRadius: radius.md,
    padding: spacing.lg,
    width: '100%',
  },
  exampleIt: {
    ...typography.bodyBold,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  exampleFr: {
    ...typography.small,
    color: colors.primaryLight,
    textAlign: 'center',
  },
  note: {
    ...typography.small,
    color: colors.primaryLight,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
});
