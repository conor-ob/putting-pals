import { IonSearchbar } from "@ionic/react";

export function PgaTourLeaderboardSearchBar({
  onSearchQueryChange,
}: {
  onSearchQueryChange: (searchQuery: string | undefined) => void;
}) {
  return (
    <IonSearchbar
      className="px-4"
      showCancelButton="focus"
      onIonInput={(e) => {
        const target = e.target;
        if (target.value) {
          onSearchQueryChange(target.value.toLowerCase());
        }
      }}
      onIonCancel={() => onSearchQueryChange(undefined)}
      onIonClear={() => onSearchQueryChange(undefined)}
    />
  );
}
