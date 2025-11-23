import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { Text, type TextProps } from "react-native";
import { cn } from "~/lib/utils";
import type { Tournament } from "./tournament-header";

const roundStatusBadgeVariants = cva(
  // "inline-flex items-center gap-x-1.5 rounded-sm px-1.5 py-0.5 text-xs font-bold uppercase leading-tight tracking-tight transition-colors",
  "rounded-sm px-1.5 py-0.5 text-sm font-bold uppercase leading-tight tracking-tight",
  {
    variants: {
      color: {
        BLUE: "bg-pga-blue text-foreground",
        GRAY: "bg-pga-gray text-foreground",
        GREEN: "bg-pga-green text-foreground",
        RED: "bg-pga-red text-foreground",
        YELLOW: "bg-pga-yellow text-foreground",
      } satisfies Record<Tournament["roundStatusColor"], string>,
    },
    defaultVariants: {
      color: "GRAY",
    },
  },
);

export function RoundStatusBadge({
  className,
  color,
  ...props
}: TextProps & VariantProps<typeof roundStatusBadgeVariants>) {
  return <Text className={cn(roundStatusBadgeVariants({ color }), className)} {...props} />;
}
