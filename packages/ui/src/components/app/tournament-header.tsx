import type { Tournament } from "@pkg/api/types";

import { cn } from "../../lib/utils";
import { TournamentInfo } from "./tournament-info";
import { TournamentName } from "./tournament-name";
import { TournamentStatusHeader } from "./tournament-status-header";

export type TournamentHeaderProps = {
  tournament: Tournament;
} & React.HTMLAttributes<HTMLDivElement>;

export function TournamentHeader({
  className,
  tournament,
  ...props
}: TournamentHeaderProps) {
  return (
    <div
      className={cn("flex flex-row items-center gap-4", className)}
      {...props}
    >
      <img
        className="h-20 w-20 rounded-full ring-1 ring-gray-300 dark:ring-0"
        src={tournament.logos[0]} // TODO
      />
      <div className="flex flex-col gap-1">
        <TournamentStatusHeader className="mb-0.5" tournament={tournament} />
        <TournamentName name={tournament.name} />
        <TournamentInfo tournament={tournament} />
      </div>
    </div>
  );
}
