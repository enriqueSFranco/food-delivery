import {useQuery} from "@tanstack/react-query"
import { restaurantService } from "../restaurant.service"

const restaurantKeys = {
  all: ['restaurants'] as const,
  details: (id: string) => ["restaurant", id] as const,
  markers: ["restaurants", "markers"] as const
}

const useRestaurants = () => {
  return useQuery({
    queryKey: restaurantKeys.all,
    queryFn: () => restaurantService.getAll(),
    staleTime: 1000 * 60 * 2,
    retry: 1
  })
}

const useRestaurant = (id: string) => {
  return useQuery({
    queryKey: ['restaurant', id],
    queryFn: async () => {
      if (!id) throw new Error("id requerido");
      return restaurantService.getById(id)
    },
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5,
    retry: 1
  })
}

const useRestaurantMarkers = () => {

}

export {useRestaurantMarkers, useRestaurants, useRestaurant}
