import { Redirect, useLocalSearchParams } from "expo-router";
import { DEFAULT_TOUR_CODE } from "~/constants/tour";

export default function Index() {
  const { tour: tourCodeParam } = useLocalSearchParams<"/[tour]">();
  const tourCode = tourCodeParam ?? DEFAULT_TOUR_CODE;
  return <Redirect href={`/${tourCode}/leaderboard`} />;
}
