import { getOrderBook } from './rest/rest'
import { openWebSocket } from './ws/ws'

export const Service = {
  restApi: {
    getOrderBook,
  },
  ws: {
    openWebSocket,
  },
}
