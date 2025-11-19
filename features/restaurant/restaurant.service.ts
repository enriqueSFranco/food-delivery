import {restaurants as mockRestaurants} from "@/data/restaurants"

const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms))

export const restaurantService = {
  getAll: async () => {
    await delay(400)
    return Promise.resolve(mockRestaurants)
  },
  getById: async (id: string) => {
    await delay(300)
    const r = mockRestaurants.find((x) => x.id === id);

    if (!r) {
      throw new Error(`Restaurant no encontrado: ${id}`);
    }
    return Promise.resolve(r)
  },
  getMarkers: async () => {
    await delay(250)
    
  }
}
