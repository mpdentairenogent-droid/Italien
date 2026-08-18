import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';

interface Props {
  icon: string;
  label: string;
  value: string | number;
  accent?: string;
}

export function StatTile({ icon, label, value, accent = colors.primary }: Props) {
  return (
    <View style={[styles.card, shadow.card]}>
      <View style={[styles.iconBadge, { backgroundColor: `${accent}1A` }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: '48%',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  icon: {
    fontSize: 18,
  },
  value: {
    ...typography.h2,
    color: colors.textPrimary,
  },
  label: {
    ...typography.small,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
