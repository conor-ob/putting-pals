import { ListItem } from "@components/list-item";
import { IonIcon } from "@ionic/react";
import { star, starOutline } from "ionicons/icons";

import { cn } from "@pkg/ui/cn";

export function CompetitionPlayerRow({
  id,
  position,
  shortName,
  total,
  totalSort,
  isFavourite,
  onFavouriteClick,
}: {
  id: string;
  position: string;
  shortName: string;
  total: string;
  totalSort: number;
  isFavourite: boolean;
  onFavouriteClick: (id: string, isFavourite: boolean) => void;
}) {
  return (
    <ListItem>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row justify-between px-4 py-3">
          <div className="flex flex-row items-center">
            <div className="w-10 text-sm font-semibold tracking-tighter">
              {position}
            </div>
            <div className="flex w-10 items-center justify-center pr-2">
              <IonIcon
                className={cn(
                  isFavourite && "text-yellow",
                  !isFavourite && "text-[#767676]",
                )}
                icon={isFavourite ? star : starOutline}
                size="small"
                onClick={() => onFavouriteClick(id, isFavourite)}
              />
            </div>
            <div className="line-clamp-1 text-sm font-semibold tracking-tighter">
              {shortName}
            </div>
          </div>
          <div className="flex flex-row">
            <div
              className={cn(
                "flex w-12 justify-center text-sm font-semibold tracking-tighter",
                totalSort < 0 && "text-red",
                totalSort === 0 && "text-green",
              )}
            >
              {total}
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
