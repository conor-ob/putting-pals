import { Image, type ImageProps } from "expo-image";
import { Platform } from "react-native";
import { useResolveClassNames } from "uniwind";
import { cn } from "~/lib/utils";

export function TournamentLogo({
  className,
  source,
  ...props
}: { source: string } & ImageProps) {
  const classNames = cn(
    "h-20 w-20 rounded-full ring-1 ring-gray-300 dark:ring-0",
    className,
  );
  return Platform.select({
    web: <Image source={source} className={classNames} {...props} />,
    default: (
      <Image
        source={source}
        style={useResolveClassNames(classNames)}
        {...props}
      />
    ),
  });
}
