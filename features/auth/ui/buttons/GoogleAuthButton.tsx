import { woltColors } from "@/constants/theme";
import { ButtonBase } from "@/shared/ui/button/ButtonBase";

export function GoogleAuthButton() {
  // TODO: Llamada de servicios para realizar el inicio de sesión con el provedor de 'Apple'
  return (
    <ButtonBase
      text="Iniciar sesion con Google"
      style={{
        backgroundColor: woltColors.buttonPrimary,
      }}
      textStyle={{ color: woltColors.buttonPrimaryText }}
    />
  );
}
