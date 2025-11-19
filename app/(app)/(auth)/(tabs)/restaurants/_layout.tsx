import { woltColors } from "@/constants/theme";
import { Stack } from "expo-router";

const RestaurantsLayout = () => {
  return (
    <Stack screenOptions={{contentStyle: {backgroundColor: woltColors.backgroundPrimary}}}>
      <Stack.Screen name="index" options={{headerShown: false}}  />
    </Stack>
  )
}

export default RestaurantsLayout
