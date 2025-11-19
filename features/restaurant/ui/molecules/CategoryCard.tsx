import { woltColors, woltRadii, woltSpacing } from "@/constants/theme";
import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CategoryItemProps {
  name: string;
  placesCount: number;
  image: ImageSourcePropType | undefined;
  onPress?: () => void;
}

export function CategoryCard({
  name,
  placesCount,
  image,
  onPress,
}: CategoryItemProps) {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <View style={styles.categoryImageContainer}>
        <Image
          source={image}
          style={styles.categoryImage}
          alt={`imageCategory-${name}`}
        />
      </View>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName} numberOfLines={1}>
          {name}
        </Text>
        {placesCount > 0 ? (
          <Text style={styles.categoryPlaces}>{placesCount} places</Text>
        ) : (
          <Text style={styles.categoryPlaces}>{placesCount} place</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: woltColors.card,
    overflow: "hidden",
    borderRadius: woltRadii.lg,
    width: 130,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { height: 2, width: 0 },
    elevation: 2,
  },
  categoryImage: {
    height: 100,
    width: "100%",
  },
  categoryImageContainer: {
  },
  categoryInfo: {
    padding: woltSpacing.sm,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: woltColors.borderLight,
  },
  categoryName: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 2,
    color: woltColors.textPrimary,
  },
  categoryPlaces: {
    fontWeight: "500",
    fontSize: 12,
    color: woltColors.textMuted,
  },
});
