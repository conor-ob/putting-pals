export function stripParenthesizedYear(value: string) {
  return value
    .replace(/\s*\(\d{4}\)\s*/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}
