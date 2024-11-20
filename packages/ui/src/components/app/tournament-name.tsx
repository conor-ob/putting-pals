import { cn } from "../../lib/utils";

export function TournamentName({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "line-clamp-2 text-lg font-bold leading-snug tracking-tight",
        className,
      )}
      {...props}
    />
  );
}
