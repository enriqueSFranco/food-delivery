import { Category } from "@/data/categories";
import { ButtonBase } from "@/shared/ui/button/ButtonBase";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CategoryCard } from "../molecules/CategoryCard";
import { woltColors, woltFontSize, woltSpacing } from "@/constants/theme";
import { layout } from "@/constants/layout";

interface CategoriesListProps {
  categories: Category[];
  onPressCategory?: (id: string) => void
}

export function CategoriesList({ categories, onPressCategory }: CategoriesListProps) {
  return (
    <View style={styles.categoriesSections}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <ButtonBase text="see all" style={{width: 100}} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        ItemSeparatorComponent={() => <View style={{width: 12}}></View>}
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            image={item.image}
            placesCount={item.placesCount}
            onPress={() => onPressCategory?.(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: woltSpacing.md,
    paddingHorizontal: woltSpacing.lg,
  },
  categoryList: {
    paddingHorizontal: woltSpacing.lg,
  },
  categoriesSections: {
    marginBottom: woltSpacing.xxl,
  },
  categoriesTitle: {
    fontSize: woltFontSize.lg,
    fontWeight: "600",
    color: woltColors.textPrimary,
  }
});
