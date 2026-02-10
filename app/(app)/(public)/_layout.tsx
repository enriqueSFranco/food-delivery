import { woltColors } from "@/constants/theme";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: woltColors.backgroundPrimary },
        }}
      />
      <Stack.Screen
        name="other-option"
        options={{
          title: '',
          headerShadowVisible: false,
          headerShown: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.6],
          sheetCornerRadius: 16,
          contentStyle: { backgroundColor: woltColors.backgroundPrimary },
        }}
      />
    </Stack>
  );
}
