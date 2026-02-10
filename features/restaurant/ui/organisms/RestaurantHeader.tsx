import { StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

interface RestaurantHeaderProps {
  title: string
}

export function RestaurantHeader({title}: RestaurantHeaderProps) {
  return (
    <Animated.View style={styles.headerContainer}>
      <Animated.View>
        {/* left */}
      </Animated.View>
      <Animated.View>
        {/* right */}
      </Animated.View>
      {/* <Text>{title}</Text> */}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "red"
  }
})
