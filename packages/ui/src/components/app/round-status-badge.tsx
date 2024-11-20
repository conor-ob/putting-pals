import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const roundStatusBadgeVariants = cva(
  "inline-flex items-center gap-x-1.5 rounded-sm px-1.5 py-0.5 text-xs font-bold uppercase leading-tight tracking-tight transition-colors",
  {
    variants: {
      color: {
        BLUE: "bg-[#20487C] text-white",
        GRAY: "bg-[#949494] text-white",
        GREEN: "bg-[#25845d] text-white",
        RED: "bg-[#ED0000] text-white",
        YELLOW: "bg-[#FAE100] text-black",
      },
    },
    defaultVariants: {
      color: "GRAY",
    },
  },
);

export type RoundStatusBadgeProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof roundStatusBadgeVariants>;

function RoundStatusBadge({
  className,
  color,
  ...props
}: RoundStatusBadgeProps) {
  return (
    <div
      className={cn(roundStatusBadgeVariants({ color }), className)}
      {...props}
    />
  );
}

export { RoundStatusBadge, roundStatusBadgeVariants };
