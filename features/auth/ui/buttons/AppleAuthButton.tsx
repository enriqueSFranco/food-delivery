import { WoltColors } from "@/constants/theme"
import {ButtonBase} from "@/shared/ui/button/ButtonBase"

export function AppleAuthButton() {
  // TODO: Llamada de servicios para realizar el inicio de sesión con el provedor de 'Apple'
  return (
      <ButtonBase text="Iniciar sesion con Apple" style={{backgroundColor: WoltColors.textDark}} textStyle={{color: WoltColors.background}} />
  )
}
