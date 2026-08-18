import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { LoadingView } from '../components/LoadingView';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeader } from '../components/ScreenHeader';
import { Navigate } from '../navigation/types';
import { getMaturity } from '../srs/sm2';
import { CUSTOM_DECK_ID, useAppState } from '../state/AppState';
import { colors, radius, shadow, spacing, typography } from '../theme/theme';
import { CardMaturity, DeckId } from '../types';

const maturityColor: Record<CardMaturity, string> = {
  new: colors.textSecondary,
  learning: colors.gold,
  young: colors.blue,
  mature: colors.primary,
};

export function DeckDetailScreen({
  deckId,
  onNavigate,
  onBack,
}: {
  deckId: DeckId;
  onNavigate: Navigate;
  onBack: () => void;
}) {
  const { loading, cards, decks, progress, deckSummary, resetDeckProgress, deleteCustomCard } = useAppState();
  const insets = useSafeAreaInsets();

  if (loading) return <LoadingView />;

  const deck = decks.find((d) => d.id === deckId);
  if (!deck) return <LoadingView />;

  const summary = deckSummary(deckId);
  const deckCards = cards.filter((c) => c.deckId === deckId);
  const isCustomDeck = deckId === CUSTOM_DECK_ID;

  const handleReset = () => {
    Alert.alert(
      'Réinitialiser ce paquet ?',
      'Toute la progression de ce paquet sera remise à zéro. Cette action est irréversible.',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Réinitialiser', style: 'destructive', onPress: () => resetDeckProgress(deckId) },
      ]
    );
  };

  const handleDeleteCard = (cardId: string, italian: string) => {
    Alert.alert('Supprimer la carte ?', `"${italian}" sera définitivement supprimée.`, [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Supprimer', style: 'destructive', onPress: () => deleteCustomCard(cardId) },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top }}>
        <ScreenHeader title={`${deck.emoji} ${deck.name}`} subtitle={deck.description} onBack={onBack} />
      </View>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.summaryCard, shadow.card]}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{summary.mature} / {summary.total} maîtrisées</Text>
            <Text style={styles.summaryPercent}>{summary.percentLearned}%</Text>
          </View>
          <ProgressBar percent={summary.percentLearned} />
          <View style={styles.summaryFooter}>
            <Text style={styles.summaryFooterText}>🆕 {summary.new} nouvelles</Text>
            <Text style={styles.summaryFooterText}>⏰ {summary.due} à réviser</Text>
          </View>
        </View>

        <Button
          label="Réviser ce paquet"
          icon="⚡️"
          onPress={() => onNavigate({ name: 'study', deckId })}
          disabled={deckCards.length === 0}
          style={styles.reviewButton}
        />

        {isCustomDeck ? (
          <Button
            label="Ajouter une carte"
            icon="➕"
            variant="secondary"
            onPress={() => onNavigate({ name: 'addCard' })}
            style={styles.addButton}
          />
        ) : null}

        <Text style={styles.sectionTitle}>Cartes ({deckCards.length})</Text>

        {deckCards.length === 0 ? (
          <Text style={styles.emptyText}>Aucune carte pour l'instant. Ajoutez-en une !</Text>
        ) : (
          deckCards.map((card) => {
            const maturity = getMaturity(progress[card.id]);
            return (
              <View key={card.id} style={styles.cardRow}>
                <View style={[styles.dot, { backgroundColor: maturityColor[maturity] }]} />
                <View style={styles.cardTextWrap}>
                  <Text style={styles.cardItalian}>{card.italian}</Text>
                  <Text style={styles.cardFrench}>{card.french}</Text>
                </View>
                {card.custom ? (
                  <Text style={styles.deleteIcon} onPress={() => handleDeleteCard(card.id, card.italian)}>
                    🗑️
                  </Text>
                ) : null}
              </View>
            );
          })
        )}

        {deckCards.length > 0 ? (
          <Text style={styles.resetLink} onPress={handleReset}>
            Réinitialiser la progression de ce paquet
          </Text>
        ) : null}
      </ScrollView>
    </View>
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
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  summaryLabel: {
    ...typography.bodyBold,
    color: colors.textPrimary,
  },
  summaryPercent: {
    ...typography.bodyBold,
    color: colors.primary,
  },
  summaryFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  summaryFooterText: {
    ...typography.small,
    color: colors.textSecondary,
  },
  reviewButton: {
    marginBottom: spacing.sm,
  },
  addButton: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.md,
  },
  cardTextWrap: {
    flex: 1,
  },
  cardItalian: {
    ...typography.bodyBold,
    color: colors.textPrimary,
  },
  cardFrench: {
    ...typography.small,
    color: colors.textSecondary,
  },
  deleteIcon: {
    fontSize: 16,
    paddingHorizontal: spacing.sm,
  },
  resetLink: {
    ...typography.small,
    color: colors.danger,
    textAlign: 'center',
    marginTop: spacing.xl,
    textDecorationLine: 'underline',
  },
});
