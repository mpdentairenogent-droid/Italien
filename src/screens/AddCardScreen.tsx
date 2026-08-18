import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { ScreenHeader } from '../components/ScreenHeader';
import { useAppState } from '../state/AppState';
import { colors, radius, spacing, typography } from '../theme/theme';

function Field({
  label,
  value,
  onChangeText,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>
        {label}
        {required ? ' *' : ''}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />
    </View>
  );
}

export function AddCardScreen({ onBack }: { onBack: () => void }) {
  const { addCustomCard } = useAppState();
  const insets = useSafeAreaInsets();

  const [italian, setItalian] = useState('');
  const [french, setFrench] = useState('');
  const [example, setExample] = useState('');
  const [exampleFr, setExampleFr] = useState('');
  const [note, setNote] = useState('');

  const canSubmit = italian.trim().length > 0 && french.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    addCustomCard({
      italian: italian.trim(),
      french: french.trim(),
      example: example.trim() || undefined,
      exampleFr: exampleFr.trim() || undefined,
      note: note.trim() || undefined,
    });
    onBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={insets.top}
    >
      <View style={{ paddingTop: insets.top }}>
        <ScreenHeader title="Nouvelle carte" subtitle="Ajoutez votre propre vocabulaire" onBack={onBack} />
      </View>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Field label="Italien" value={italian} onChangeText={setItalian} placeholder="es. andare al mare" required />
        <Field label="Français" value={french} onChangeText={setFrench} placeholder="ex. aller à la mer" required />
        <Field
          label="Phrase d'exemple (italien)"
          value={example}
          onChangeText={setExample}
          placeholder="Andiamo al mare domani."
        />
        <Field
          label="Traduction de l'exemple"
          value={exampleFr}
          onChangeText={setExampleFr}
          placeholder="On va à la mer demain."
        />
        <Field label="Astuce (optionnel)" value={note} onChangeText={setNote} placeholder="Une astuce de mémorisation" />

        <Button label="Ajouter la carte" onPress={handleSubmit} disabled={!canSubmit} style={styles.submitButton} />
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
  },
  field: {
    marginBottom: spacing.lg,
  },
  fieldLabel: {
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
  },
  submitButton: {
    marginTop: spacing.md,
  },
});
