import { IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import { useParams } from "react-router-dom";

import { TournamentHeader } from "@pkg/ui/app";
import { cn } from "@pkg/ui/cn";
import { Skeleton } from "@pkg/ui/ui";

// import { LeaderboardListHeader } from "../components/LeaderboardListHeader";
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
        {/* <LeaderboardListHeader /> */}
        {leaderboard ? (
          <>
            <div>
              <IonListHeader>
                <IonLabel>
                  <div className="text-2xl tracking-tight">All Players</div>
                </IonLabel>
              </IonListHeader>
              <PgaTourLeaderboardHeader
                roundDisplay={tournament?.roundDisplay}
              />
              <div className="mx-4 h-0.5 bg-foreground"></div>
            </div>
            {leaderboard.players.map((row) => {
              if (row.__typename === "InformationRow") {
                return <div key={row.id}>{row.displayText}</div>;
              } else {
                return (
                  <div key={row.id}>
                    <PgaTourPlayerRow
                      position={row.scoringData.position}
                      countryFlag={row.player.countryFlag}
                      shortName={row.player.shortName}
                      abbreviations={row.player.abbreviations}
                      total={row.scoringData.total}
                      totalSort={row.scoringData.totalSort}
                      score={row.scoringData.score}
                      thru={row.scoringData.thru}
                    />
                    <div className="mx-4 border-b"></div>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <div></div>
        )}
      </IonList>
    </PageLayout>
  );
}

function PgaTourLeaderboardHeader({ roundDisplay }: { roundDisplay?: string }) {
  return (
    <div className="flex w-full flex-row justify-between px-4 py-2 text-[#767676]">
      <div className="flex flex-row items-center">
        <div className="w-10 text-xs font-bold tracking-tighter">POS</div>
        <div className="me-2 w-8"></div>
        <div className="text-xs font-bold tracking-tighter">PLAYER</div>
      </div>
      <div className="flex flex-row">
        <div
          className={cn(
            "flex w-12 justify-center text-xs font-bold tracking-tighter",
          )}
        >
          TOT
        </div>
        <div className="flex w-10 justify-center text-xs font-bold tracking-tighter">
          THRU
        </div>
        <div className="flex w-8 justify-end text-xs font-bold tracking-tighter">
          {roundDisplay ?? "RD"}
        </div>
      </div>
    </div>
  );
}

function PgaTourPlayerRow({
  position,
  countryFlag,
  shortName,
  abbreviations,
  total,
  totalSort,
  thru,
  score,
}: {
  position: string;
  countryFlag: string;
  shortName: string;
  abbreviations: string;
  total: string;
  totalSort: number;
  thru: string;
  score: string;
}) {
  return (
    <IonItem>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center">
          <div className="w-10 text-sm font-bold tracking-tighter">
            {position}
          </div>
          <div className="me-2 w-8 px-0.5">
            <img
              className="rounded-sm"
              src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4.0/Assets/PNG/${countryFlag}%403x.png`}
            />
          </div>
          <div className="text-sm font-bold tracking-tighter">
            {shortName}
            <span className="text-[#767676]">{` ${abbreviations}`}</span>
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className={cn(
              "flex w-12 justify-center text-sm font-bold tracking-tighter",
              totalSort < 0 && "text-red",
              totalSort === 0 && "text-green",
            )}
          >
            {total}
          </div>
          <div className="flex w-10 justify-center text-sm font-bold tracking-tighter">
            {thru}
          </div>
          <div className="flex w-8 justify-end text-sm font-bold tracking-tighter">
            {score}
          </div>
        </div>
      </div>
    </IonItem>
  );
}
