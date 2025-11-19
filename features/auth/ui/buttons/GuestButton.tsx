import { woltColors } from "@/constants/theme";
import { ButtonBase } from "@/shared/ui/button/ButtonBase";
import { useRouter } from "expo-router";
import { useAuthStore } from "../../hooks/use-authStore";

export function GuestButton() {
  const router = useRouter();
  const { loginGuest } = useAuthStore();

  const handleGuest = async () => {
    console.log("continuando como invitado")
    await loginGuest();
    router.replace("/restaurants");
  };

  return (
    <ButtonBase
      onPress={handleGuest}
      text="Continue as guest"
      variant="ghost"
      textStyle={{ color: woltColors.textPrimary }}
    />
  );
}
