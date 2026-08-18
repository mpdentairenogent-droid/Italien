import { Flashcard } from '../../types';

/** [italian, french, example (it), example translation (fr), note?] */
export type RawCard = [string, string, string, string, string?];

export function buildCards(deckId: string, rows: RawCard[]): Flashcard[] {
  return rows.map(([italian, french, example, exampleFr, note], i) => ({
    id: `${deckId}-${i + 1}`,
    deckId,
    italian,
    french,
    example,
    exampleFr,
    note,
  }));
}
