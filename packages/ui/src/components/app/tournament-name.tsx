import { cn } from "../../lib/utils";

export function TournamentName({
  className,
  name,
  ...props
}: { name: string } & React.HTMLAttributes<HTMLDivElement>) {
  const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  };

  let adjustedName = name;
  const parts = adjustedName.split("(");
  if (parts.length > 1) {
    const remainder = parts[1]?.split(")");
    if (
      remainder !== undefined &&
      remainder.length > 1 &&
      isNumeric(remainder[0] ?? "")
    ) {
      adjustedName = parts[0]?.trim() + " " + remainder[1]?.trim();
    }
  }

  return (
    <div
      className={cn(
        "line-clamp-2 text-lg font-bold leading-snug tracking-tight",
        className,
      )}
      {...props}
    >
      {adjustedName}
    </div>
  );
}
