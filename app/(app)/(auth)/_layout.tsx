import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuthStore } from "@/features/auth/hooks/use-authStore";
import { woltColors } from "@/constants/theme";
// import {} from "react-native-screen-transitions"

export default function AuthLayout() {
  const insets = useSafeAreaInsets();
  const {user} = useAuthStore()

  if (!user) {
    return <Redirect href="/other-option" />
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: woltColors.backgroundPrimary, paddingTop: insets.top}}>
      <StatusBar style="dark" backgroundColor={woltColors.backgroundPrimary} />
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
    </SafeAreaView>
  )
}
