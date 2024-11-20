import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const roundStatusVariants = cva(
  "inline-flex items-center gap-x-1.5 rounded-sm px-1.5 py-0.5 text-sm font-bold uppercase leading-tight tracking-tight transition-colors",
  {
    variants: {
      color: {
        BLUE: "text-[#20487C]",
        GRAY: "text-[#949494]",
        GREEN: "text-[#25845d]",
        RED: "text-[#ED0000]",
        YELLOW: "text-[#FAE100]",
      },
    },
    defaultVariants: {
      color: "GRAY",
    },
  },
);

export type RoundStatusProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof roundStatusVariants>;

function RoundStatus({ className, color, ...props }: RoundStatusProps) {
  return (
    <div className={cn(roundStatusVariants({ color }), className)} {...props} />
  );
}

export { RoundStatus, roundStatusVariants };
