import { api } from '@/lib/axios'

export interface ResgisterRestaurantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function resgisterRestaurant({
  restaurantName,
  email,
  managerName,
  phone,
}: ResgisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, email, managerName, phone })
}
