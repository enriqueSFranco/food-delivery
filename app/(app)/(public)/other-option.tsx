import { woltColors } from "@/constants/theme";
import { AppleAuthButton } from "@/features/auth/ui/buttons/AppleAuthButton";
import { GoogleAuthButton } from "@/features/auth/ui/buttons/GoogleAuthButton";
import { GuestButton } from "@/features/auth/ui/buttons/GuestButton";
import { ButtonBase } from "@/shared/ui/button/ButtonBase";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ButtonBase
        text=""
        onPress={() => router.dismiss()}
        prefixIcon={
          <AntDesign
            name="closecircle"
            size={24}
            color={woltColors.textPrimary}
          />
        }
        variant="ghost"
        style={{ alignSelf: "flex-end" }}
      />
      <Text style={{ fontSize: 32, marginVertical: 32 }}>
        Login in or create a wolt account
      </Text>

      <View style={styles.buttonContainer}>
        <AppleAuthButton />
        <GoogleAuthButton />
        <GuestButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  container: {
    flex: 1,
    padding: 14,
  },
});
