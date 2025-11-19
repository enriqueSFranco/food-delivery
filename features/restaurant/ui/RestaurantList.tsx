import { woltColors, woltFontSize } from "@/constants/theme";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRestaurants } from "../hooks/use-restaurants";
import { RestaurantCard } from "./molecules/RestaurantCard";

export function RestaurantList() {
  const { data: restaurants, isLoading, isError, error } = useRestaurants();

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={woltColors.backgroundPrimary} />
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.errorMessage}>{error?.message}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.restaurantsTitle}>All restaurants</Text>
      <FlatList
      contentContainerStyle={styles.restaurantsList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            name={item.name}
            description={item.description}
            rating={item.rating}
            deliveryTime={item.deliveryTime}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {},
  errorTitle: {},
  errorMessage: {},
  restaurantsList: {},
  restaurantsTitle: {
    fontSize: woltFontSize.lg,
    fontWeight: "600",
    color: woltColors.textPrimary,
  },
  separator: {
    height: 22
  }
});
