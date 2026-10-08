import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { View, ViewProps } from "react-native";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import type { RoundStatusColor } from "~/providers/trpc/types";

const roundStatusBadgeVariants = cva("px-1.5 py-px", {
  variants: {
    color: {
      BLUE: "bg-brand-blue",
      GRAY: "bg-brand-gray",
      GREEN: "bg-brand-green",
      RED: "bg-brand-red",
      YELLOW: "bg-brand-yellow",
    } satisfies Record<RoundStatusColor, string>,
  },
  defaultVariants: {
    color: "GRAY",
  },
});

const roundStatusBadgeTextVariants = cva("text-xs font-semibold uppercase", {
  variants: {
    color: {
      BLUE: "text-brand-blue-foreground",
      GRAY: "text-brand-gray-foreground",
      GREEN: "text-brand-green-foreground",
      RED: "text-brand-red-foreground",
      YELLOW: "text-brand-yellow-foreground",
    } satisfies Record<RoundStatusColor, string>,
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

export type { RoundStatusBadgeProps };
export {
  RoundStatusBadge,
  roundStatusBadgeTextVariants,
  roundStatusBadgeVariants,
};
