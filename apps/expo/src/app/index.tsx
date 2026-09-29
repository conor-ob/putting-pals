import { Redirect } from "expo-router";
import { DEFAULT_TOUR_CODE } from "~/constants/tour";
import { useLocalStorage } from "~/storage/use-local-storage";

export default function Index() {
  const { value: tourCode, loading } = useLocalStorage(
    "putting-pals:app:tour-code:v1",
  );

  if (loading) {
    return null;
  }

  return <Redirect href={`/${tourCode ?? DEFAULT_TOUR_CODE}/leaderboard`} />;
}
