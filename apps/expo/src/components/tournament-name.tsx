import { Text, type TextProps } from "react-native";
import { cn } from "~/lib/utils";

export function TournamentName({ className, ...props }: TextProps) {
  return (
    <Text
      className={cn(
        "line-clamp-2 text-lg font-bold leading-snug tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}
