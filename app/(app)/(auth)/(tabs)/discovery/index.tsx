import { OrdersList } from "@/features/order/ui/organisms/OrdersList";
import { View } from "react-native";

export default function Page() {
  // const {} = useOrders()
  return (
    <View>
      {/* section: order again */}
      <OrdersList />
    </View>
  )
}
