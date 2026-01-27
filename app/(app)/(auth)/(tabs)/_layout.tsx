import { woltColors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

type TabItem = {
  name: string;
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const TAB_CONFIG: TabItem[] = [
  {
    name: "discovery",
    title: "Discovery",
    icon: "explore",
  },
  {
    name: "restaurants",
    title: "Restaurants",
    icon: "restaurant",
  },
  {
    name: "stores",
    title: "Stores",
    icon: "store-mall-directory",
  },
  {
    name: "search",
    title: "Search",
    icon: "search",
  },
  {
    name: "profile",
    title: "Profile",
    icon: "person",
  },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: woltColors.brandPrimary,
        tabBarInactiveTintColor: woltColors.textMuted,
        tabBarLabelStyle: { fontSize: 11, marginTop: -4 },
      }}
    >
      {TAB_CONFIG.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name={icon} size={24} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
