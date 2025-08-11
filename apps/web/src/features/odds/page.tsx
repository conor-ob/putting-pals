import { useEffect, useState } from "react";
import { ListItem } from "@components/list-item";
import { PageLayout } from "@components/page-layout";
import { LeaderboardHeader } from "@features/leaderboard/header";
import { IonList } from "@ionic/react";
import { api } from "@providers/trpc-provider";

import { cn } from "@pkg/ui/cn";
import { Skeleton } from "@pkg/ui/ui";

type Runner = {
  id: string;
  name: string;
  odds: {
    numerator: number;
    denominator: number;
    decimal: number;
  };
};

// TODO remove hardcoded id
const tid = "R2025100";
const cid = "12679628";

export function OddsPage() {
  const id = cid;
  const { data, error } = api.odds.getById.useQuery({ id });

  return (
    <PageLayout title="Odds" largeHeader>
      <IonList lines="none">
        {data ? (
          <PickerList id={id} data={data.runners} />
        ) : error ? (
          <div>Error</div>
        ) : (
          <>
            <LeaderboardHeader id={tid} />
            <div className="flex flex-col px-4">
              <div className="border-b py-4">
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="border-b py-4">
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="border-b py-4">
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="border-b py-4">
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="border-b py-4">
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          </>
        )}
      </IonList>
    </PageLayout>
  );
}

function PickerList({ id, data }: { id: string; data: Runner[] }) {
  const cacheKey = `Picks:${id}`;

  const [loadingPicks, setLoadingPicks] = useState(true);
  const [picks, setPicks] = useState<Runner[]>([]);
  const [runners, setRunners] = useState<Runner[]>(data);

  useEffect(() => {
    function loadPicks() {
      try {
        const picksJson = localStorage.getItem(cacheKey);
        if (picksJson !== null) {
          const picks = JSON.parse(picksJson) as string[];
          if (picks.length !== 0) {
            setPicks(data.filter((it) => picks.includes(it.id)));
            setRunners(data.filter((it) => !picks.includes(it.id)));
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // error reading value
      } finally {
        setLoadingPicks(false);
      }
    }

    loadPicks();
  }, [cacheKey, data]);

  function handleRemove(pick: Runner) {
    const newPicks = picks
      .filter((it) => it.id !== pick.id)
      .sort((a, b) => a.odds.decimal - b.odds.decimal);

    const newRunners = [...runners, pick].sort(
      (a, b) => a.odds.decimal - b.odds.decimal,
    );

    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify(newPicks.map((it) => it.id)),
      );
      setPicks(newPicks);
      setRunners(newRunners);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // saving error
    }
  }

  function handleAdd(runner: Runner) {
    const newPicks = [...picks, runner].sort(
      (a, b) => a.odds.decimal - b.odds.decimal,
    );

    const newRunners = runners
      .filter((it) => it.id !== runner.id)
      .sort((a, b) => a.odds.decimal - b.odds.decimal);

    if (newPicks.length <= 3) {
      try {
        localStorage.setItem(
          cacheKey,
          JSON.stringify(newPicks.map((it) => it.id)),
        );
        setPicks(newPicks);
        setRunners(newRunners);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // saving error
      }
    }
  }

  if (loadingPicks) {
    return (
      <>
        <LeaderboardHeader id={tid} />
        <div className="flex flex-col px-4">
          <div className="border-b py-4">
            <Skeleton className="h-3 w-full" />
          </div>
          <div className="border-b py-4">
            <Skeleton className="h-3 w-full" />
          </div>
          <div className="border-b py-4">
            <Skeleton className="h-3 w-full" />
          </div>
          <div className="border-b py-4">
            <Skeleton className="h-3 w-full" />
          </div>
          <div className="border-b py-4">
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col">
      <LeaderboardHeader id={tid} />
      <div className="px-4 py-2">
        <div className="text-2xl font-bold tracking-tight">Picks</div>
      </div>
      <div>
        {picks.map((runner) => (
          <ListItem
            key={runner.name}
            button={true}
            detail={false}
            onClick={() => handleRemove(runner)}
          >
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-row items-center justify-between py-3 pl-4 pr-0">
                <div className="line-clamp-1 text-sm font-medium tracking-tighter">
                  {runner.name}
                </div>
                <OddsBadge odds={runner.odds} />
              </div>
              <div className="ml-4 mr-0 border-b"></div>
            </div>
          </ListItem>
        ))}

        {picks.length === 0 ? (
          <ListItem button={true} detail={false}>
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-row items-center justify-between py-3 pl-4 pr-0">
                <div className="line-clamp-1 text-sm font-medium tracking-tighter text-muted-foreground">
                  Pick 3 players
                </div>
                <div className="w-20 rounded-md bg-[#EDEDED] py-2 text-center dark:bg-[#121212]">
                  <p className="text-sm font-semibold tracking-wide text-muted-foreground">
                    -/-
                  </p>
                </div>
              </div>
              <div className="ml-4 mr-0 border-b"></div>
            </div>
          </ListItem>
        ) : (
          <TotalRow picks={picks} />
        )}
      </div>
      <div className="h-12" />
      <div className="px-4 py-2">
        <div className="text-2xl font-bold tracking-tight">Field</div>
      </div>
      <div>
        {runners.map((runner) => (
          <ListItem
            key={runner.name}
            button={true}
            detail={false}
            onClick={() => handleAdd(runner)}
          >
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-row items-center justify-between py-3 pl-4 pr-0">
                <div className="line-clamp-1 text-sm font-medium tracking-tighter">
                  {runner.name}
                </div>
                <OddsBadge odds={runner.odds} />
              </div>
              <div className="ml-4 mr-0 border-b"></div>
            </div>
          </ListItem>
        ))}
      </div>
    </div>
  );
}

function TotalRow({ picks }: { picks: Runner[] }) {
  const sumOdds = picks.reduce((sum, current) => sum + current.odds.decimal, 0);

  const odds = {
    id: "total",
    numerator: Math.floor(sumOdds),
    denominator: 1,
    decimal: Math.floor(sumOdds / 1),
  };

  const threshold = 125;
  const totalOdds = odds.decimal;

  return (
    <ListItem button={true} detail={false}>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row items-center justify-between py-3 pl-4 pr-0">
          <div className="text-sm text-muted-foreground">
            {`Total${!(totalOdds >= threshold) ? " must be at least 125/1" : ""}`}
          </div>
          <OddsBadge odds={odds} calculateTotal={true} />
        </div>
      </div>
    </ListItem>
  );
}

function OddsBadge({
  odds,
  calculateTotal,
}: {
  odds: Runner["odds"];
  calculateTotal?: boolean;
}) {
  const threshold = 125;
  const totalOdds = odds.decimal;

  return (
    <div className="w-20 rounded-md bg-[#EDEDED] py-2 text-center dark:bg-[#121212]">
      <p
        className={cn("text-sm font-semibold tracking-wide text-[#009744]", {
          "text-red-500 dark:text-red-600":
            calculateTotal && !(totalOdds >= threshold),
        })}
      >{`${odds.numerator}/${odds.denominator}`}</p>
    </div>
  );
}
