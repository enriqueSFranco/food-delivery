import {
  woltColors,
  woltFontSize,
  woltOpacity,
  woltRadii,
  woltShadow,
  woltSpacing,
} from "@/constants/theme";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  type ImageSourcePropType,
} from "react-native";

interface RestaurantCardProps {
  name: string;
  description: string;
  rating: number
  deliveryTime: string
  image: ImageSourcePropType | undefined;
  isFavorite?: boolean
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

export function RestaurantCard({
  name,
  description,
  rating,
  deliveryTime,
  isFavorite,
  image,
  style,
  containerStyle,
  onPress,
}: RestaurantCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        woltShadow.medium,
        style,
        containerStyle,
      ]}
    >
      <View style={styles.restaurantImageWrapper}>
        <Image source={image ?? require("@/assets/images/app-wolt.png") } resizeMode="cover" style={styles.image} />
        <View style={styles.imageOverlay} />

        {typeof rating === "number" && (
          <View style={styles.badgeLeft}>
            <Text style={styles.badgeText}>{rating}</Text>
          </View>
        )}

        {deliveryTime && (
          <View style={styles.badgeRight}>
          <Text style={styles.badgeTextSmall}>{deliveryTime}</Text>
        </View>
        )}

        {isFavorite && (
          <View style={styles.favorite}>
            <Text style={styles.favoriteText}>♥</Text>
          </View>
        )}
      </View>

      <View style={styles.restaurantInfo}>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </Pressable>
  );
}

const CARD_WIDTH = 220;

const styles = StyleSheet.create({
  badgeLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.58)",
    borderRadius: woltRadii.lg,
    paddingHorizontal: woltSpacing.sm,
    paddingVertical: woltSpacing.xs,
    minWidth: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeRight: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: woltSpacing.sm,
    paddingVertical: woltSpacing.xs,
    borderRadius: woltRadii.lg,
  },
  badgeText: {
    fontSize: woltFontSize.xs,
    fontWeight: "600",
    color: woltColors.textPrimary,
  },
  badgeTextSmall: {
    fontSize: woltFontSize.xs,
    color: "#fff",
    fontWeight: "500",
  },
  container: {
    width: CARD_WIDTH,
    borderRadius: woltRadii.lg,
    overflow: "hidden",
    backgroundColor: woltColors.card,
    marginRight: woltSpacing.md,
  },
  favorite: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: woltSpacing.sm,
    borderRadius: woltRadii.lg,
    alignItems: "center",
    justifyContent: "center",

  },
  favoriteText: {
    fontSize: woltFontSize.sm,
    color: woltColors.brandPrimary,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: woltOpacity.pressed,
  },
  restaurantImageWrapper: {
    width: "100%",
    height: 130,
    position: "relative",
    backgroundColor: woltColors.surfaceMuted
  },
  restaurantInfo: {
    paddingHorizontal: woltSpacing.md,
    paddingVertical: woltSpacing.sm,
  },
});
