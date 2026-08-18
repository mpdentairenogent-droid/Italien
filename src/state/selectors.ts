import { getMaturity, isDue, isLeech } from '../srs/sm2';
import { CardId, DeckId, Flashcard, ProgressMap, ReviewLogEntry, Settings } from '../types';
import { todayKey } from '../utils/date';

export interface OverallStats {
  totalCards: number;
  newCount: number;
  learningCount: number;
  youngCount: number;
  matureCount: number;
  dueToday: number;
  reviewedToday: number;
  reviewsAllTime: number;
  retentionRate: number | null;
  leechCount: number;
}

export interface DeckProgressSummary {
  deckId: DeckId;
  total: number;
  mature: number;
  due: number;
  new: number;
  percentLearned: number;
}

/** Cards whose first-ever review happened today, derived from the capped review log. */
export function newCardsIntroducedToday(log: ReviewLogEntry[], today: string = todayKey()): number {
  const firstSeen = new Map<CardId, string>();
  for (const entry of log) {
    if (!firstSeen.has(entry.cardId)) firstSeen.set(entry.cardId, entry.date);
  }
  let count = 0;
  for (const date of firstSeen.values()) if (date === today) count++;
  return count;
}

/**
 * Builds today's study queue: overdue/due cards first (most overdue first), then
 * fresh cards fill the remaining daily allowance. Mixing reviews before new cards
 * keeps the SRS backlog from growing while still introducing new vocabulary daily.
 */
export function getStudyQueue(
  cards: Flashcard[],
  progress: ProgressMap,
  settings: Settings,
  log: ReviewLogEntry[],
  deckId?: DeckId
): Flashcard[] {
  const today = todayKey();
  const scoped = deckId ? cards.filter((c) => c.deckId === deckId) : cards;

  const due = scoped
    .filter((c) => isDue(progress[c.id], today))
    .sort((a, b) => (progress[a.id]?.dueDate ?? '').localeCompare(progress[b.id]?.dueDate ?? ''))
    .slice(0, settings.reviewsPerDay);

  const alreadyNewToday = newCardsIntroducedToday(log, today);
  const remainingNewSlots = Math.max(0, settings.newCardsPerDay - alreadyNewToday);

  const fresh = scoped.filter((c) => !progress[c.id]).slice(0, remainingNewSlots);

  return [...due, ...fresh];
}

export function getOverallStats(
  cards: Flashcard[],
  progress: ProgressMap,
  log: ReviewLogEntry[]
): OverallStats {
  const today = todayKey();
  let newCount = 0;
  let learningCount = 0;
  let youngCount = 0;
  let matureCount = 0;
  let dueToday = 0;
  let leechCount = 0;

  for (const card of cards) {
    const p = progress[card.id];
    const maturity = getMaturity(p);
    if (maturity === 'new') newCount++;
    else if (maturity === 'learning') learningCount++;
    else if (maturity === 'young') youngCount++;
    else matureCount++;

    if (isDue(p, today)) dueToday++;
    if (isLeech(p)) leechCount++;
  }

  const todayEntries = log.filter((e) => e.date === today);
  const recentEntries = log.slice(-200);
  const recentSuccesses = recentEntries.filter((e) => e.grade !== 'again').length;
  const retentionRate = recentEntries.length > 0 ? Math.round((recentSuccesses / recentEntries.length) * 100) : null;

  return {
    totalCards: cards.length,
    newCount,
    learningCount,
    youngCount,
    matureCount,
    dueToday,
    reviewedToday: todayEntries.length,
    reviewsAllTime: log.length,
    retentionRate,
    leechCount,
  };
}

export function getDeckProgressSummary(
  cards: Flashcard[],
  progress: ProgressMap,
  deckId: DeckId
): DeckProgressSummary {
  const deckCards = cards.filter((c) => c.deckId === deckId);
  let mature = 0;
  let due = 0;
  let fresh = 0;
  const today = todayKey();

  for (const card of deckCards) {
    const p = progress[card.id];
    const maturity = getMaturity(p);
    if (maturity === 'mature') mature++;
    if (maturity === 'new') fresh++;
    if (isDue(p, today)) due++;
  }

  return {
    deckId,
    total: deckCards.length,
    mature,
    due,
    new: fresh,
    percentLearned: deckCards.length > 0 ? Math.round((mature / deckCards.length) * 100) : 0,
  };
}
