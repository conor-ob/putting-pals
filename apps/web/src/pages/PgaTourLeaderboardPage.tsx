import { IonItem, IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

import { TournamentHeader } from "@pkg/ui/app";
import { Skeleton } from "@pkg/ui/ui";

import { LeaderboardListHeader } from "../components/LeaderboardListHeader";
import { PageLayout } from "../layouts/PageLayout";
import { api } from "../providers/trpc-provider";

export function PgaTourLeaderboardPage() {
  const params = useParams<{ id: string }>();

  const {
    data: tournament,
    fetchStatus: tournamentFetchStatus,
    error: tournamentError,
  } = api.tournament.getById.useQuery({ id: params.id });

  console.log({ tournament, tournamentFetchStatus, tournamentError });

  const {
    data: leaderboard,
    fetchStatus: leaderboardFetchStatus,
    error: leaderboardError,
  } = api.leaderboard.getById.useQuery({ id: params.id });

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
        <LeaderboardListHeader />
        {leaderboard ? (
          leaderboard.players.map((row) => {
            if (row.__typename === "InformationRow") {
              return <div key={row.id}>{row.displayText}</div>;
            } else {
              return (
                <PgaTourPlayerRow
                  key={row.id}
                  position={row.scoringData.position}
                  countryFlag={row.player.countryFlag}
                  displayName={row.player.displayName}
                  total={row.scoringData.total}
                  score={row.scoringData.score}
                  thru={row.scoringData.thru}
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
  position,
  countryFlag,
  displayName,
  total,
  thru,
  score,
}: {
  position: string;
  countryFlag: string;
  displayName: string;
  total: string;
  thru: string;
  score: string;
}) {
  return (
    <IonItem>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center gap-3">
          <div>{position}</div>
          <img
            className="xs:h-5 xs:w-7 h-4 w-6 rounded-sm"
            src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${countryFlag}%403x.png`}
          />
          <div className="text-base font-normal tracking-tight">
            {displayName}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div>{total}</div>
          <div>{thru}</div>
          <div>{score}</div>
        </div>
      </div>
    </IonItem>
  );
}
