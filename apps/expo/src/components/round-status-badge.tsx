import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { View, ViewProps } from "react-native";
import type { Tournament } from "~/components/tournament-header";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

const roundStatusBadgeVariants = cva("px-1.5 py-0.25", {
  variants: {
    color: {
      BLUE: "bg-pga-blue",
      GRAY: "bg-pga-gray",
      GREEN: "bg-pga-green",
      RED: "bg-pga-red",
      YELLOW: "bg-pga-yellow",
    } satisfies Record<Tournament["roundStatusColor"], string>,
  },
  defaultVariants: {
    color: "GRAY",
  },
});

const roundStatusBadgeTextVariants = cva("text-xs font-semibold", {
  variants: {
    color: {
      BLUE: "text-white",
      GRAY: "text-white",
      GREEN: "text-white",
      RED: "text-white",
      YELLOW: "text-black",
    } satisfies Record<Tournament["roundStatusColor"], string>,
  },
  defaultVariants: {
    color: "GRAY",
  },
});

type RoundStatusBadgeProps = ViewProps &
  React.RefAttributes<View> &
  VariantProps<typeof roundStatusBadgeVariants>;

function RoundStatusBadge({
  className,
  color,
  children,
  ...props
}: RoundStatusBadgeProps) {
  return (
    <Badge
      className={cn(roundStatusBadgeVariants({ color }), className)}
      {...props}
    >
      <Text className={cn(roundStatusBadgeTextVariants({ color }))}>
        {children}
      </Text>
    </Badge>
  );
}

export {
  RoundStatusBadge,
  roundStatusBadgeTextVariants,
  roundStatusBadgeVariants,
};
export type { RoundStatusBadgeProps };
