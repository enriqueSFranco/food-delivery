import { Slot } from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"


const queryClient = new QueryClient()

export default function RootLayout() {
  // NOTE: Podemos usar el hook useFont para cargar una fuente de letra en tiempo de ejecución
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
