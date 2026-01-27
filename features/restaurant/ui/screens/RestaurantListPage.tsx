import { type Restaurant } from "@/data/restaurants";
import { StyleSheet, Text, useAnimatedValue, View } from "react-native";

import { woltFontSize, woltSpacing } from "@/constants/theme";
import { Category } from "@/data/categories";
import { CategoriesList } from "../organisms/CategoriesList";
import { RestaurantList } from "../organisms/RestaurantList";
import { RestaurantHeader } from "../organisms/RestaurantHeader";

const HEADER_MAX_HEIGHT = 120 // altura del header expandido
const HEADER_MIN_HEIGHT = 64 // altura cuando está collapsed / sticky
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

interface RestaurantListProps {
  restaurants: Restaurant[]
  categories: Category[]
}

export function RestaurantListPage({categories}: RestaurantListProps) {
  const scrollY = useAnimatedValue(0)

  return (
    <View style={{flex: 1}}>
      {/* CollapsableHeader */}
      <RestaurantHeader title="Restaurants" />
      <Text style={styles.pageTitle}>Restaurants</Text>
      <CategoriesList categories={categories} />

      <Text>All restaurants</Text>
      <RestaurantList />
    </View>
  )
}

const styles = StyleSheet.create({
  pageTitle: {
    paddingHorizontal: woltSpacing.lg,
    fontSize: woltFontSize.xl,
    fontWeight: "600"
  }
})
