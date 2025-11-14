import { WoltColors } from "@/constants/theme";
import { ButtonBase } from "@/shared/ui/button/ButtonBase";
import { useAuthStore } from "../../hooks/use-authStore";

export function GuestButton() {
  const {loginGuest} = useAuthStore()

  return (
    <ButtonBase onPress={loginGuest} text="Continue as guest" variant="ghost" textStyle={{color: WoltColors.primary}} />
  )
}
