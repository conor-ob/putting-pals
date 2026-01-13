import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { TextProps } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

export function PositionColumn({ children, className, ...props }: TextProps) {
  return (
    <Text className={`w-1/4 text-center ${className}`} {...props}>
      {children}
    </Text>
  );
}

export function NameColumn({ children, className, ...props }: TextProps) {
  return (
    <Text className={`w-1/4 ${className}`} {...props}>
      {children}
    </Text>
  );
}

export function TotalColumn({ children, className, ...props }: TextProps) {
  return (
    <Text className={`w-1/4 text-right ${className}`} {...props}>
      {children}
    </Text>
  );
}

const scoreColumnVariants = cva("w-16 text-right", {
  variants: {
    color: {
      under: "text-pga-red",
      default: "text-foreground",
    },
  },
});

type ScoreColumnProps = TextProps &
  VariantProps<typeof scoreColumnVariants> & {
    sort: number;
  };

export function ScoreColumn({
  children,
  className,
  sort,
  ...props
}: ScoreColumnProps) {
  const color = sort < 0 ? "under" : "default";
  return (
    <Text
      className={cn(scoreColumnVariants({ color }), className, "w-1/4")}
      {...props}
    >
      {children}
    </Text>
  );
}
