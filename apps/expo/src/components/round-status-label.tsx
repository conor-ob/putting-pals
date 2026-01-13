import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { TextProps } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

const roundStatusLabelVariants = cva(
  // "inline-flex items-center gap-x-1.5 rounded-sm px-1.5 py-0.5 text-sm font-bold uppercase leading-tight tracking-tight transition-colors",
  "text-sm font-bold uppercase leading-tight tracking-tight",
  {
    variants: {
      color: {
        BLUE: "text-pga-blue",
        GRAY: "text-pga-gray",
        GREEN: "text-pga-green",
        RED: "text-pga-red",
        YELLOW: "text-pga-yellow",
      } satisfies Record<
        RouterOutputs["tournament"]["getById"]["roundStatusColor"],
        string
      >,
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
