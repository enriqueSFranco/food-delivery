import { Text, View } from "react-native";
import OrderCard from "../molecules/OrderCard";

export function OrdersList({}) {

  return (
    <View>
      <Text>componente: OrdersList</Text>
      {/* flatlist */}
      <OrderCard />
    </View>
  )
}
