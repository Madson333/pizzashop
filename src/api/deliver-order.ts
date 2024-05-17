import { api } from '@/lib/axios'

export interface DeliverOrderDetailsParams {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderDetailsParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
