import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { View, type ViewProps } from "react-native";
import * as Slot from "~/components/primitives/slot";
import type { Tournament } from "~/components/tournament-header";
import { badgeTextVariants, badgeVariants } from "~/components/ui/badge";
import { TextClassContext } from "~/components/ui/text";
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
  React.RefAttributes<View> & {
    asChild?: boolean;
  } & VariantProps<typeof roundStatusBadgeVariants>;

function RoundStatusBadge({ className, color, asChild, ...props }: RoundStatusBadgeProps) {
  const Component = asChild ? Slot.View : View;
  return (
    <TextClassContext.Provider
      value={cn(badgeTextVariants(), roundStatusBadgeTextVariants({ color }))}
    >
      <Component
        className={cn(badgeVariants(), roundStatusBadgeVariants({ color }), className)}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { RoundStatusBadge, roundStatusBadgeTextVariants, roundStatusBadgeVariants };
export type { RoundStatusBadgeProps };
