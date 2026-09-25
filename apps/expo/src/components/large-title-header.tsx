import { View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLLAPSE_DISTANCE = 40;
export const LARGE_TITLE_HEADER_HEIGHT = 44;

/**
 * Web/Android stand-in for iOS's native `headerLargeTitle`, which is a
 * UIKit-only feature and a no-op on every other platform. Owns a
 * scroll-driven shared value the caller wires into their scroll container.
 */
export function useLargeTitleHeader() {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  return { scrollY, scrollHandler };
}

export function LargeTitleHeaderOverlay({
  title,
  scrollY,
}: {
  title: string;
  scrollY: SharedValue<number>;
}) {
  const insets = useSafeAreaInsets();

  const smallTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [COLLAPSE_DISTANCE - 10, COLLAPSE_DISTANCE],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  const dividerStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, COLLAPSE_DISTANCE],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <Animated.View
      className="absolute top-0 left-0 right-0 z-10 bg-background"
      style={{ paddingTop: insets.top }}
    >
      <View
        style={{ height: LARGE_TITLE_HEADER_HEIGHT }}
        className="items-center justify-center"
      >
        <Animated.Text
          className="text-base font-semibold text-foreground"
          style={smallTitleStyle}
        >
          {title}
        </Animated.Text>
      </View>
      <Animated.View className="h-px bg-border" style={dividerStyle} />
    </Animated.View>
  );
}

export function LargeTitleText({
  title,
  scrollY,
}: {
  title: string;
  scrollY: SharedValue<number>;
}) {
  const largeTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, COLLAPSE_DISTANCE],
      [1, 0],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, COLLAPSE_DISTANCE],
          [0, -8],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.Text
      className="text-3xl font-bold text-foreground pb-2"
      style={largeTitleStyle}
    >
      {title}
    </Animated.Text>
  );
}
