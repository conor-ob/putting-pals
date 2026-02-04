import { Button, View } from "react-native";
import { useTourCode } from "./tour-code-provider";

export function TourCodeSwitcher() {
  const { tours, setTourCode } = useTourCode();
  return (
    <View>
      {tours.map((tour) => (
        <Button
          key={tour.tourCode}
          title={tour.tourName}
          onPress={() => setTourCode(tour.tourCode)}
        />
      ))}
    </View>
  );
}
