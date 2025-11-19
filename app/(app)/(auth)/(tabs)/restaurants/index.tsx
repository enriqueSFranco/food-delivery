import { ScrollView, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RestaurantListPage } from "@/features/restaurant/ui/pages/RestaurantListPage";
import { categories } from "@/data/categories";
import { restaurants } from "@/data/restaurants";

{
  /*  */
}
{
  /* <MaterialIcons name="filter-list" size={24} color="black" /> */
}
{
  /* <MaterialIcons name="map" size={24} color="black" /> */
}
{
  /* <MaterialIcons name="business" size={24} color="black" /> */
}

{
  /* <MaterialIcons name="favorite-outline" size={24} color="black" /> */
}
{
  /* <MaterialIcons name="euro-symbol" size={24} color="black" /> */
}
{
  /* <MaterialIcons name="delivery-dining" size={24} color="black" /> */
}
{
  /* <MaterialIcons name="directions-bike" size={24} color="black" /> */
}

export default function Index() {
  return (
    <ScrollView>
      <View>
        {/* dropdown */}
        <View>{/* two options */}</View>
      </View>
      {/* <View>
        <Text>restaurants</Text>
        <View>
          <MaterialIcons name="info-outline" size={24} color="black" />
          <Text>About results</Text>
        </View>
      </View> */}
      <RestaurantListPage restaurants={restaurants} categories={categories} />
    </ScrollView>
  );
}
