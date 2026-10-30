// ESPN has no tournament logos, so the host country's flag stands in for one.
export function getTournamentLogo(countryCode: string): string {
  return `https://www.europeantour.com/Images/Flags/${countryCode}_64x64_2x.png`;
}
