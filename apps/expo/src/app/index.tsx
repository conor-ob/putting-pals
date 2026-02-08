import { Redirect } from "expo-router";
import { DEFAULT_TOUR_CODE } from "~/constants/tour";
import { useLocalStorage } from "~/storage/use-local-storage";

export default function Index() {
  const { value: tourCode } = useLocalStorage("putting-pals:app:tour-code:v1");
  return <Redirect href={`/${tourCode ?? DEFAULT_TOUR_CODE}`} />;
}
