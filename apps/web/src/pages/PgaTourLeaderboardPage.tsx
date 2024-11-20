import { IonItem, IonList } from "@ionic/react";

import { Skeleton } from "@pkg/ui/skeleton";
import { TournamentHeader } from "@pkg/ui/tournament";

import { PageLayout } from "../layouts/PageLayout";
import { api } from "../providers/trpc-provider";

export function PgaTourLeaderboardPage() {
  const {
    data: tournament,
    fetchStatus: tournamentFetchStatus,
    error: tournamentError,
  } = api.tournament.getCurrent.useQuery();

  console.log({ tournament, tournamentFetchStatus, tournamentError });

  const {
    data: leaderboard,
    fetchStatus: leaderboardFetchStatus,
    error: leaderboardError,
  } = api.leaderboard.getCurrent.useQuery();

  console.log({ leaderboard, leaderboardFetchStatus, leaderboardError });

  return (
    <PageLayout title="PGA Tour" largeHeader>
      <IonList lines="none">
        <IonItem button={!!tournament} detail={!!tournament}>
          {tournament ? (
            <TournamentHeader
              className="py-4"
              courses={tournament.courses}
              roundDisplay={tournament.roundDisplay}
              roundStatus={tournament.roundStatus}
              roundStatusColor={tournament.roundStatusColor}
              roundStatusDisplay={tournament.roundStatusDisplay}
              tournamentLogo={tournament.tournamentLogo}
              tournamentName={tournament.tournamentName}
              tournamentStatus={tournament.tournamentStatus}
            />
          ) : (
            <div className="flex flex-row items-center gap-3 py-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          )}
        </IonItem>
        {leaderboard ? (
          leaderboard.rows.map((row) => {
            if (row.__typename === "InformationRow") {
              return <div key={row.id}>{row.displayText}</div>;
            } else {
              return (
                <PgaTourPlayerRow
                  key={row.id}
                  displayName={row.player?.displayName ?? ""}
                  countryFlag={row.player?.countryFlag ?? ""}
                />
              );
            }
          })
        ) : (
          <div></div>
        )}
      </IonList>
    </PageLayout>
  );
}

function PgaTourPlayerRow({
  displayName,
  countryFlag,
}: {
  displayName: string;
  countryFlag: string;
}) {
  return (
    <IonItem>
      <div className="flex flex-row items-center gap-3">
        <img
          className="xs:h-5 xs:w-7 h-4 w-6 rounded-sm"
          src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${countryFlag}%403x.png`}
        />
        <div className="text-base font-normal tracking-tight">
          {displayName}
        </div>
      </div>
    </IonItem>
  );
}
