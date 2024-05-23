import type { OrderBook } from '@/helpers/types/types'

export const getOrderBook = async ( currency: string ): Promise<OrderBook> => {
  const response = await fetch( import.meta.env.VITE_REST_API_URL + currency )

  const result: OrderBook = await response.json()

  return result
}
