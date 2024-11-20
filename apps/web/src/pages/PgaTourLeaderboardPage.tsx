import { IonItem, IonList } from "@ionic/react";

import { Skeleton } from "@pkg/ui/skeleton";
import { TournamentHeader } from "@pkg/ui/tournament";

import { PageLayout } from "../layouts/PageLayout";
import { api } from "../providers/trpc-provider";

export function PgaTourLeaderboardPage() {
  const {
    data: tournament,
    fetchStatus: tournamentsFetchStatus,
    error: tournamentError,
  } = api.tournament.getCurrent.useQuery();

  console.log({ tournament, tournamentsFetchStatus, tournamentError });

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
              tournamentLogo={tournament.logoUrl}
              tournamentName={tournament.name}
              tournamentStatus={tournament.status}
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
      </IonList>
    </PageLayout>
  );
}
