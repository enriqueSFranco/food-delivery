import { Fonts } from "@/constants/fonts";
import { layout } from "@/constants/layout";
import { AppleAuthButton } from "@/features/auth/ui/buttons/AppleAuthButton";
import { GoogleAuthButton } from "@/features/auth/ui/buttons/GoogleAuthButton";
import OtherOptionAuthButton from "@/features/auth/ui/buttons/OtherOptionAuthButton";
import { SmoothInfiniteScroll } from "@/shared/ui/SmoothInfiniteScroll";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.inifiniteScrollContainer, layout.rowCenter]}>
        <SmoothInfiniteScroll iconSet="set1" />
        <SmoothInfiniteScroll scrollDirection="down" iconSet="set2" />
        <SmoothInfiniteScroll iconSet="set3" />
      <LinearGradient
        colors={["transparent", "#fff"]}
        style={{ position: "absolute", height: 200, bottom: 0, left: 0, right: 0 }}
      />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagLine}>
          Almost everything delivered
        </Animated.Text>
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <OtherOptionAuthButton />
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  brandLogo: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  inifiniteScrollContainer: {
    flex: 0.8,
    gap: 10,
    position: "relative",
  },
  tagLine: {
    fontSize: 32,
    fontFamily: Fonts.brandBold,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
});
