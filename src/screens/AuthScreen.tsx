import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../auth/AuthContext';
import { Button } from '../components/Button';
import { colors, radius, spacing, typography } from '../theme/theme';

export function AuthScreen() {
  const { signIn, signUp } = useAuth();
  const insets = useSafeAreaInsets();

  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const canSubmit = email.trim().length > 3 && password.length >= 6 && !loading;

  const handleSubmit = async () => {
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === 'signIn') {
        const err = await signIn(email.trim(), password);
        if (err) setError(err);
      } else {
        const { error: err, needsConfirmation } = await signUp(email.trim(), password);
        if (err) setError(err);
        else if (needsConfirmation) setInfo('Compte créé ! Vérifiez votre email pour confirmer avant de vous connecter.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={insets.top}
    >
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.xxxl }]} keyboardShouldPersistTaps="handled">
        <Text style={styles.emoji}>🇮🇹</Text>
        <Text style={styles.title}>Italien Flashcards</Text>
        <Text style={styles.subtitle}>
          {mode === 'signIn' ? 'Connectez-vous pour retrouver votre progression.' : 'Créez votre compte personnel.'}
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="vous@exemple.com"
            placeholderTextColor={colors.textSecondary}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Au moins 6 caractères"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {info ? <Text style={styles.info}>{info}</Text> : null}

        <Button
          label={loading ? 'Un instant...' : mode === 'signIn' ? 'Se connecter' : 'Créer mon compte'}
          onPress={handleSubmit}
          disabled={!canSubmit}
          style={styles.submitButton}
        />

        <Text
          style={styles.toggleLink}
          onPress={() => {
            setMode((m) => (m === 'signIn' ? 'signUp' : 'signIn'));
            setError(null);
            setInfo(null);
          }}
        >
          {mode === 'signIn' ? "Pas encore de compte ? Créez-en un" : 'Déjà un compte ? Connectez-vous'}
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
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
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxl,
  },
  field: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.smallBold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...typography.body,
    color: colors.textPrimary,
    width: '100%',
  },
  error: {
    ...typography.small,
    color: colors.danger,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  info: {
    ...typography.small,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  submitButton: {
    marginTop: spacing.sm,
  },
  toggleLink: {
    ...typography.small,
    color: colors.primary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
