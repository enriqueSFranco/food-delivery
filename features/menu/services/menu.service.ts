import { Dish, MenuCategory } from "@/data/restaurant_menu";

export const menuService = {
  getMenu: async (restaurantId: string): Promise<MenuCategory> => {},

  getDishById: async (dish: number): Promise<Dish> => {},

  getAllDishes: async (restaurantId: string): Promise<Dish[]> => {},

  getPopularDishes: async (restaurantId: string): Promise<Dish[]> => {}
}
