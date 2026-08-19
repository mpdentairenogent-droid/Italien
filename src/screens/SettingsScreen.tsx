import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../auth/AuthContext';
import { LoadingView } from '../components/LoadingView';
import { useAppState } from '../state/AppState';
import { isSupabaseConfigured } from '../supabase/client';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';

function Stepper({
  label,
  value,
  onChange,
  step,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step: number;
  min: number;
  max: number;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.stepperControls}>
        <Pressable
          onPress={() => onChange(Math.max(min, value - step))}
          style={styles.stepperButton}
          hitSlop={8}
        >
          <Text style={styles.stepperButtonText}>−</Text>
        </Pressable>
        <Text style={styles.stepperValue}>{value}</Text>
        <Pressable
          onPress={() => onChange(Math.min(max, value + step))}
          style={styles.stepperButton}
          hitSlop={8}
        >
          <Text style={styles.stepperButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function SettingsScreen() {
  const { loading, settings, updateSettings, resetAllProgress } = useAppState();
  const { user, signOut } = useAuth();
  const insets = useSafeAreaInsets();

  if (loading) return <LoadingView />;

  const handleResetAll = () => {
    Alert.alert(
      'Réinitialiser toute la progression ?',
      "Toutes vos statistiques et l'avancement de toutes les cartes seront perdus. Vos cartes personnalisées seront conservées.",
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Tout réinitialiser', style: 'destructive', onPress: resetAllProgress },
      ]
    );
  };

  const handleSignOut = () => {
    Alert.alert('Se déconnecter ?', 'Votre progression reste sauvegardée dans le cloud.', [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Se déconnecter', style: 'destructive', onPress: signOut },
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Réglages</Text>

      {isSupabaseConfigured && user ? (
        <>
          <Text style={styles.sectionTitle}>Compte</Text>
          <View style={[styles.card, shadow.card]}>
            <Text style={styles.rowLabel}>{user.email}</Text>
            <Text style={styles.syncNote}>Votre progression est synchronisée avec le cloud.</Text>
            <Pressable onPress={handleSignOut} style={styles.signOutButton}>
              <Text style={styles.dangerText}>Se déconnecter</Text>
            </Pressable>
          </View>
        </>
      ) : null}

      <Text style={styles.sectionTitle}>Session d'apprentissage</Text>
      <View style={[styles.card, shadow.card]}>
        <Stepper
          label="Nouvelles cartes / jour"
          value={settings.newCardsPerDay}
          onChange={(v) => updateSettings({ newCardsPerDay: v })}
          step={5}
          min={5}
          max={50}
        />
        <View style={styles.divider} />
        <Stepper
          label="Révisions max / jour"
          value={settings.reviewsPerDay}
          onChange={(v) => updateSettings({ reviewsPerDay: v })}
          step={20}
          min={20}
          max={500}
        />
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Retour haptique</Text>
          <Switch
            value={settings.hapticsEnabled}
            onValueChange={(v) => updateSettings({ hapticsEnabled: v })}
            trackColor={{ false: colors.surfaceSunken, true: colors.primary }}
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Zone dangereuse</Text>
      <View style={[styles.card, shadow.card]}>
        <Pressable onPress={handleResetAll}>
          <Text style={styles.dangerText}>Réinitialiser toute la progression</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>À propos</Text>
      <View style={[styles.card, shadow.card, styles.aboutCard]}>
        <Text style={styles.aboutEmoji}>🇮🇹</Text>
        <Text style={styles.aboutTitle}>Italien Flashcards</Text>
        <Text style={styles.aboutText}>
          Une app de répétition espacée pour apprendre l'italien à votre rythme. Chaque carte est planifiée selon vos
          propres résultats pour optimiser votre mémorisation.
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
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.smallBold,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  rowLabel: {
    ...typography.body,
    color: colors.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  stepperControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  stepperButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperButtonText: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    marginTop: -1,
  },
  stepperValue: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    minWidth: 32,
    textAlign: 'center',
  },
  dangerText: {
    ...typography.bodyBold,
    color: colors.danger,
    textAlign: 'center',
  },
  syncNote: {
    ...typography.small,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  signOutButton: {
    marginTop: spacing.lg,
  },
  aboutCard: {
    alignItems: 'center',
  },
  aboutEmoji: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  aboutTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  aboutText: {
    ...typography.small,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
