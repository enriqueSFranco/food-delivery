import { useAuthStore } from "@/features/auth/hooks/use-authStore";
import { Stack } from "expo-router";

const RootNav = () => {
  // TODO: Obtener el tipo de usuario que tiene el use-userStore
  const {isGuest, isAuthenticated} = useAuthStore()
  const isLoggedIn = isGuest || isAuthenticated
  const isPublic = !isGuest && !isAuthenticated
  
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isPublic}>
        <Stack.Screen
          name="(public)"
          options={{headerShown: false}}
        />
      </Stack.Protected>
    </Stack>
  );
};

export default RootNav;
