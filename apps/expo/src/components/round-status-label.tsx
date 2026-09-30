import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { TextProps } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import type { RoundStatusColor } from "~/providers/trpc/types";

const roundStatusLabelVariants = cva(
  // "inline-flex items-center gap-x-1.5 rounded-sm px-1.5 py-0.5 text-sm font-bold uppercase leading-tight tracking-tight transition-colors",
  "text-sm font-bold uppercase leading-tight tracking-tight",
  {
    variants: {
      color: {
        BLUE: "text-brand-blue",
        GRAY: "text-brand-gray",
        GREEN: "text-brand-green",
        RED: "text-brand-red",
        YELLOW: "text-brand-yellow",
      } satisfies Record<RoundStatusColor, string>,
    },
    defaultVariants: {
      color: "GRAY",
    },
  },
);

export function RoundStatusLabel({
  className,
  color,
  ...props
}: TextProps & VariantProps<typeof roundStatusLabelVariants>) {
  return (
    <Text
      className={cn(roundStatusLabelVariants({ color }), className)}
      {...props}
    />
  );
}
