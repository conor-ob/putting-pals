import { TournamentHeader } from "@components/app";
import { ListItem } from "@components/list-item";
import { Skeleton } from "@components/ui";
import type { TourCode } from "@providers/trpc/types";
import { trpc } from "@providers/trpc/utils/trpc";
import { useQuery } from "@tanstack/react-query";

export function CompetitionHeader({
  tourCode,
  id,
}: {
  tourCode: TourCode;
  id?: string;
}) {
  const { data, isLoading, isRefetching } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode, id }),
  );

  if (isLoading || isRefetching || !data) {
    return (
      <ListItem>
        <div className="flex flex-row items-center gap-3 p-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <TournamentHeader className="p-4" tournament={data} />
      </ListItem>
    );
  }
}
