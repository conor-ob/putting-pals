import { IonSearchbar } from "@ionic/react";

export function LeaderboardSearchBar({
  onSearchQueryChange,
}: {
  onSearchQueryChange: (searchQuery: string | undefined) => void;
}) {
  return (
    <IonSearchbar
      className="px-4"
      showCancelButton="focus"
      onIonInput={(e) => {
        const value = e.target.value?.trim();
        // report an empty input too, otherwise deleting the query leaves the
        // last non-empty value applied
        onSearchQueryChange(value ? value.toLowerCase() : undefined);
      }}
      onIonCancel={() => onSearchQueryChange(undefined)}
      onIonClear={() => onSearchQueryChange(undefined)}
    />
  );
}
