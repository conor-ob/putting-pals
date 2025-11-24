import { Text, type TextProps } from "react-native";
import { cn } from "~/lib/utils";

export function TournamentName({ className, ...props }: TextProps) {
  const isNumeric = (val: string): boolean => {
    return !Number.isNaN(Number(val));
  };

  // TODO: adjust the name on the server
  if (typeof props.children !== "string") {
    throw new Error("Tournament.tournamentName must be a string");
  }
  let adjustedName = props.children;
  const parts = adjustedName.split("(");
  if (parts.length > 1) {
    const remainder = parts[1]?.split(")");
    if (remainder !== undefined && remainder.length > 1 && isNumeric(remainder[0] ?? "")) {
      adjustedName = `${parts[0]?.trim()} ${remainder[1]?.trim()}`;
    }
  }

  return (
    <Text
      className={cn(
        "line-clamp-2 text-lg font-bold leading-snug tracking-tight text-foreground",
        className,
      )}
      {...props}
    >
      {adjustedName}
    </Text>
  );
}
