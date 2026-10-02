export function getLocation({
  city,
  state,
  country,
}: {
  city: string;
  state: string;
  country: string;
}): string {
  return state === ""
    ? `${city} • ${country}`
    : `${city}, ${state} • ${country}`;
}
