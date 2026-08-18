import { CardId, CardMaturity, CardProgress, Grade } from '../types';
import { addDays, nowISO, todayKey } from '../utils/date';

export const DEFAULT_EASE = 2.5;
export const MIN_EASE = 1.3;
export const MATURE_INTERVAL_DAYS = 21;
export const LEECH_THRESHOLD = 4;

export function createInitialProgress(cardId: CardId): CardProgress {
  return {
    cardId,
    repetitions: 0,
    easeFactor: DEFAULT_EASE,
    intervalDays: 0,
    dueDate: todayKey(),
    lastReviewed: null,
    lapses: 0,
    totalReviews: 0,
    correctStreak: 0,
  };
}

/**
 * SM-2 derived scheduler with the 4-button (Again/Hard/Good/Easy) grading that
 * Anki popularized. Plain SM-2 only has a 0-5 "quality" score, which is hard to
 * expose in a UI; collapsing it to four buttons while keeping SM-2's ease-factor
 * and interval-growth mechanics gives the same long-term spacing behaviour with
 * a much simpler review action.
 */
export function reviewCard(progress: CardProgress, grade: Grade, today: string = todayKey()): CardProgress {
  const next: CardProgress = { ...progress, lastReviewed: nowISO(), totalReviews: progress.totalReviews + 1 };

  if (grade === 'again') {
    if (progress.repetitions >= 2) next.lapses += 1;
    next.repetitions = 0;
    next.correctStreak = 0;
    next.easeFactor = Math.max(MIN_EASE, progress.easeFactor - 0.2);
    next.intervalDays = 1;
  } else {
    next.correctStreak = progress.correctStreak + 1;
    const easeDelta = grade === 'hard' ? -0.15 : grade === 'easy' ? 0.15 : 0;
    next.easeFactor = Math.max(MIN_EASE, progress.easeFactor + easeDelta);

    if (progress.repetitions === 0) {
      next.intervalDays = grade === 'hard' ? 1 : grade === 'good' ? 1 : 3;
    } else if (progress.repetitions === 1) {
      next.intervalDays = grade === 'hard' ? 3 : grade === 'good' ? 6 : 8;
    } else {
      const growth = grade === 'hard' ? 1.2 : next.easeFactor;
      next.intervalDays = Math.max(1, Math.round(progress.intervalDays * growth));
    }
    next.repetitions = progress.repetitions + 1;
  }

  next.dueDate = addDays(today, next.intervalDays);
  return next;
}

export function getMaturity(progress?: CardProgress): CardMaturity {
  if (!progress || progress.totalReviews === 0) return 'new';
  if (progress.intervalDays >= MATURE_INTERVAL_DAYS) return 'mature';
  if (progress.repetitions >= 2) return 'young';
  return 'learning';
}

export function isLeech(progress?: CardProgress): boolean {
  return !!progress && progress.lapses >= LEECH_THRESHOLD;
}

export function isDue(progress: CardProgress | undefined, today: string = todayKey()): boolean {
  if (!progress) return false;
  return progress.dueDate <= today;
}
