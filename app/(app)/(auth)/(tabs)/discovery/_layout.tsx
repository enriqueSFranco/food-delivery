import { Stack } from "expo-router";

export default function DiscoveryLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  )
}
