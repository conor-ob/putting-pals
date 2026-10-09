export const NAME_SIMILARITY_THRESHOLD = 0.5;

const NAME_STOP_WORDS = new Set([
  "the",
  "presented",
  "pres",
  "by",
  "at",
  "in",
  "of",
  "and",
]);

/**
 * Fraction of the shorter name's words that appear in the other name, so
 * extra sponsor words like "presented by X" don't reduce the score.
 */
export function nameSimilarity(a: string, b: string): number {
  const ta = nameTokens(a);
  const tb = nameTokens(b);
  if (ta.size === 0 || tb.size === 0) {
    return 0;
  }

  const shared = [...ta].filter((token) => tb.has(token)).length;
  return shared / Math.min(ta.size, tb.size);
}

function nameTokens(name: string): Set<string> {
  return new Set(
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 1 && !NAME_STOP_WORDS.has(token)),
  );
}
