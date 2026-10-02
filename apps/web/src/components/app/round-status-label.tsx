import { cn } from "@lib/utils";
import type { RoundStatusColor } from "@providers/trpc/types";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type * as React from "react";

const roundStatusLabelVariants = cva(
  "inline-flex items-center gap-x-1.5 rounded-sm px-1.5 py-0.5 text-sm font-bold uppercase leading-tight tracking-tight transition-colors",
  {
    variants: {
      color: {
        BLUE: "text-blue",
        GRAY: "text-gray",
        GREEN: "text-green",
        RED: "text-red",
        YELLOW: "text-black dark:text-yellow",
      } satisfies Record<RoundStatusColor, string>,
    },
    defaultVariants: {
      color: "GRAY",
    },
  },
);

export type RoundStatusLabelProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof roundStatusLabelVariants>;

function RoundStatusLabel({
  className,
  color,
  ...props
}: RoundStatusLabelProps) {
  return (
    <div
      className={cn(roundStatusLabelVariants({ color }), className)}
      {...props}
    />
  );
}

export { RoundStatusLabel, roundStatusLabelVariants };
