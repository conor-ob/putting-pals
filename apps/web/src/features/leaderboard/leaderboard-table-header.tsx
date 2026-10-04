export function LeaderboardTableHeader({
  leaderboardRoundHeader,
}: {
  leaderboardRoundHeader: string;
}) {
  return (
    <>
      <div className="flex w-full flex-row justify-between px-4 py-2 text-muted-foreground">
        <div className="flex flex-row items-center">
          <div className="w-10 text-xs font-semibold tracking-tighter">POS</div>
          <div className="me-2 w-8"></div>
          <div className="text-xs font-semibold tracking-tighter">PLAYER</div>
        </div>
        <div className="flex flex-row">
          <div className="flex w-12 justify-center text-xs font-semibold tracking-tighter">
            TOT
          </div>
          <div className="flex w-10 justify-center text-xs font-semibold tracking-tighter">
            THRU
          </div>
          <div className="flex w-8 justify-end text-xs font-semibold tracking-tighter">
            {leaderboardRoundHeader === "" ? "RD" : leaderboardRoundHeader}
          </div>
        </div>
      </div>
      <div className="mx-4 h-0.5 bg-foreground"></div>
    </>
  );
}
