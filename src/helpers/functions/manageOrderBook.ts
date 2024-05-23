import { DepthStream, OrderBook } from '@/helpers/types/types'

export const manageOrderBook = ( stream: DepthStream, lastUpdatedId: number, cb: ( params: OrderBook ) => void ) => {
  if ( stream.u <= lastUpdatedId ) {
    return
  }

  if ( stream.U <= lastUpdatedId + 1 && stream.u >= lastUpdatedId + 1 ) {
    cb( { bids: stream.b, asks: stream.a, lastUpdateId: stream.u } )
  }

  console.log( 'stream.U <= lastUpdatedId + 1 && stream.u >= lastUpdatedId + 1: ', stream.U <= lastUpdatedId + 1 && stream.u >= lastUpdatedId + 1 )
}
