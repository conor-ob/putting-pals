import { ListItem } from "@components/list-item";
import { IonIcon } from "@ionic/react";
import { cn } from "@lib/utils";
import type { CompetitorRow as CompetitorRowType } from "@providers/trpc/types";
import { star, starOutline } from "ionicons/icons";

export function CompetitorRow({
  row,
  isFavourite,
  onFavouriteClick,
}: {
  row: CompetitorRowType;
  isFavourite: boolean;
  onFavouriteClick: (id: string, isFavourite: boolean) => void;
}) {
  const { competitor, scoringData } = row;

  return (
    <ListItem>
      <div className="flex w-full flex-col">
        <div className="mx-4 border-t"></div>
        <div className="flex w-full flex-row justify-between px-4 py-3">
          <div className="flex flex-row items-center">
            <div className="w-10 text-sm font-semibold tracking-tighter">
              {scoringData.position}
            </div>
            <div className="flex w-10 items-center justify-center pr-2">
              <IonIcon
                className={cn(
                  isFavourite && "text-yellow",
                  !isFavourite && "text-muted-foreground",
                )}
                icon={isFavourite ? star : starOutline}
                size="small"
                onClick={() => onFavouriteClick(row.id, isFavourite)}
              />
            </div>
            <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
              {competitor.shortName}
            </div>
          </div>
          <div className="flex flex-row">
            <div
              className={cn(
                "flex w-12 justify-center text-sm font-semibold tracking-tighter",
                scoringData.totalSort < 0 && "text-red",
                scoringData.totalSort === 0 &&
                  scoringData.total !== "-" &&
                  "text-green",
              )}
            >
              {scoringData.total}
            </div>
            <div className="flex w-10 justify-center text-sm font-semibold tracking-tighter"></div>
            <div className="flex w-8 justify-end text-sm font-semibold tracking-tighter"></div>
          </div>
        </div>
        <div className="mx-4 border-b"></div>
      </div>
    </ListItem>
  );
}
