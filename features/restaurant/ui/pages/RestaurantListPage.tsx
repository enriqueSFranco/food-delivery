import { type Restaurant } from "@/data/restaurants";
import { StyleSheet, Text, View } from "react-native";

import { CategoriesList } from "../organism/CategoriesList";
import { RestaurantList } from "../RestaurantList";
import { Category } from "@/data/categories";
import { woltFontSize, woltSpacing } from "@/constants/theme";

interface RestaurantListProps {
  restaurants: Restaurant[]
  categories: Category[]
}

export function RestaurantListPage({categories}: RestaurantListProps) {
  return (
    <View style={{flex: 1}}>
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
