import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { reviewCard } from '../srs/sm2';
import { gradeColors, radius, spacing, typography } from '../theme/theme';
import { CardProgress, Grade } from '../types';
import { formatInterval } from '../utils/date';

interface Props {
  progress: CardProgress;
  onGrade: (grade: Grade) => void;
}

const OPTIONS: { grade: Grade; label: string }[] = [
  { grade: 'again', label: 'Encore' },
  { grade: 'hard', label: 'Difficile' },
  { grade: 'good', label: 'Bien' },
  { grade: 'easy', label: 'Facile' },
];

export function GradeButtons({ progress, onGrade }: Props) {
  return (
    <View style={styles.row}>
      {OPTIONS.map(({ grade, label }) => {
        const preview = reviewCard(progress, grade);
        return (
          <Pressable
            key={grade}
            onPress={() => onGrade(grade)}
            style={({ pressed }) => [styles.button, { borderColor: gradeColors[grade] }, pressed && styles.pressed]}
          >
            <Text style={[styles.interval, { color: gradeColors[grade] }]}>{formatInterval(preview.intervalDays)}</Text>
            <Text style={styles.label}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1.5,
  },
  pressed: {
    opacity: 0.6,
  },
  interval: {
    ...typography.smallBold,
    marginBottom: 2,
  },
  label: {
    ...typography.small,
    color: '#4A4237',
  },
});
