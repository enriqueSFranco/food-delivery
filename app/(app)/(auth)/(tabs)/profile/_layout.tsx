import { woltColors } from "@/constants/theme";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: woltColors.backgroundPrimary },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Profile", headerLargeTitle: true, headerTransparent: true }}
      />
    </Stack>
  );
}
