function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

/** Local calendar date as yyyy-mm-dd (not UTC, so "today" matches the user's day). */
export function toDateKey(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function todayKey(): string {
  return toDateKey(new Date());
}

export function nowISO(): string {
  return new Date().toISOString();
}

export function addDays(dateKey: string, days: number): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + Math.round(days));
  return toDateKey(date);
}

export function daysBetween(fromKey: string, toKey: string): number {
  const [y1, m1, d1] = fromKey.split('-').map(Number);
  const [y2, m2, d2] = toKey.split('-').map(Number);
  const a = Date.UTC(y1, m1 - 1, d1);
  const b = Date.UTC(y2, m2 - 1, d2);
  return Math.round((b - a) / 86400000);
}

export function isDueOrPast(dateKey: string, referenceKey: string = todayKey()): boolean {
  return dateKey <= referenceKey;
}

/** Short interval label for grade-preview chips, e.g. "1j", "6j", "2 mois". */
export function formatInterval(days: number): string {
  if (days < 1) return '<1j';
  if (days === 1) return '1j';
  if (days < 30) return `${days}j`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} mois`;
  const years = Math.round(days / 365);
  return `${years} an${years > 1 ? 's' : ''}`;
}

/** Human label like "aujourd'hui", "demain", "dans 3 jours". */
export function relativeDayLabel(dateKey: string): string {
  const diff = daysBetween(todayKey(), dateKey);
  if (diff <= 0) return "aujourd'hui";
  if (diff === 1) return 'demain';
  if (diff < 7) return `dans ${diff} jours`;
  const weeks = Math.round(diff / 7);
  if (diff < 30) return weeks <= 1 ? 'dans 1 semaine' : `dans ${weeks} semaines`;
  const months = Math.round(diff / 30);
  return months <= 1 ? 'dans 1 mois' : `dans ${months} mois`;
}
