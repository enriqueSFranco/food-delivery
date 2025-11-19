import { woltColors } from "@/constants/theme";
import { ButtonBase } from "@/shared/ui/button/ButtonBase";
import { Link } from "expo-router";

export default function OtherOptionAuthButton() {
  // TODO: Llamada de servicios para realizar el inicio de sesión con el provedor de 'Apple'
  return (
    <Link href="/(app)/(public)/other-option" asChild>
      <ButtonBase
        text="Otras opciones"
        style={{ backgroundColor: woltColors.buttonSecondary }}
        textStyle={{ color: woltColors.buttonSecondaryText }}
      />
    </Link>
  );
}
