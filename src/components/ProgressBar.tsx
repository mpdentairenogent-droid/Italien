import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, radius } from '../theme/theme';

interface Props {
  percent: number;
  color?: string;
  trackColor?: string;
  height?: number;
}

export function ProgressBar({ percent, color = colors.primary, trackColor = colors.surfaceSunken, height = 8 }: Props) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <View style={[styles.track, { backgroundColor: trackColor, height, borderRadius: height / 2 }]}>
      <View style={[styles.fill, { width: `${clamped}%`, backgroundColor: color, borderRadius: height / 2 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
