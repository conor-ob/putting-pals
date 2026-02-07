import { Redirect } from "expo-router";
import { DEFAULT_TOUR_CODE } from "~/constants/tour";

export default function Index() {
  return <Redirect href={`/${DEFAULT_TOUR_CODE}`} />;
}
