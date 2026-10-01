import { Image, type ImageSource } from "expo-image";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import type { TourCode } from "~/providers/trpc/types";

/**
 * Bundled tour logos. Add an entry here once the asset exists, e.g.
 * `pga: require("../../assets/images/tours/pga.png")`. Tours without an entry
 * fall back to coloured initials.
 */
const TOUR_LOGOS: Partial<Record<TourCode, ImageSource>> = {};

const TOUR_INITIALS: Record<TourCode, { initials: string; className: string }> =
  {
    pal: { initials: "PAL", className: "bg-emerald-700" },
    pga: { initials: "PGA", className: "bg-blue-800" },
    eur: { initials: "DPW", className: "bg-sky-600" },
    liv: { initials: "LIV", className: "bg-zinc-600" },
    dev: { initials: "KFT", className: "bg-amber-600" },
    snr: { initials: "PTC", className: "bg-indigo-700" },
    pam: { initials: "PTA", className: "bg-red-700" },
  };

export function TourLogo({
  tourCode,
  size = 28,
}: {
  tourCode: TourCode;
  size?: number;
}) {
  const dimensions = { width: size, height: size, borderRadius: size / 2 };
  const logo = TOUR_LOGOS[tourCode];

  if (logo) {
    return <Image source={logo} style={dimensions} contentFit="contain" />;
  }

  const { initials, className } = TOUR_INITIALS[tourCode];

  return (
    <View
      className={cn("items-center justify-center", className)}
      style={dimensions}
    >
      <Text
        className="font-bold text-white"
        style={{ fontSize: size * 0.32 }}
        allowFontScaling={false}
      >
        {initials}
      </Text>
    </View>
  );
}
