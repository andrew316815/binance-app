import { defineStore } from 'pinia'
import { Service } from '@/services'
import { OrderBook, LogData, DepthStream, CountItem } from '@/helpers/types/types'
import { manageOrderBook } from '@/helpers/functions/manageOrderBook'

export const useAppStore = defineStore( 'app', {
  state: () => ( {
    order: {} as OrderBook,
    logs: [] as LogData[],
    selectedCurrencyPair: '',
    wsConnection: {} as WebSocket,
  } ),
  getters: {
    reversedBids(): CountItem[] {
      const bids: CountItem[] = this.order.bids ? JSON.parse( JSON.stringify( this.order.bids ) ) : []
      return bids.reverse()
    },
    reversedAsks(): CountItem[] {
      const asks: CountItem[] = this.order.asks ? JSON.parse( JSON.stringify( this.order.asks ) ) : []
      return asks.reverse()
    },
  },
  actions: {
    async getOrderBook( currency: string ) {
      if ( this.selectedCurrencyPair !== currency && this.selectedCurrencyPair ) {
        const newLog = {
          prev: this.selectedCurrencyPair,
          new: currency,
          date: new Date(),
        }
        this.logs.push( newLog )
        localStorage.setItem( 'logs', JSON.stringify( this.logs ) )
      }

      this.openSocket( currency )

      this.selectedCurrencyPair = currency
      const orderBook = await Service.restApi.getOrderBook( currency )
      this.order = orderBook
    },
    cleanLogs() {
      this.logs = []
      localStorage.setItem( 'logs', JSON.stringify( [] ) )
    },
    setSocketInfo( stream: DepthStream ) {
      manageOrderBook( stream, this.order.lastUpdateId, this.updateOrder )
    },
    openSocket( currency: string ) {
      if ( typeof this.wsConnection.close === 'function' ) {
        this.wsConnection.close()
      }

      const connection = Service.ws.openWebSocket( currency, this.setSocketInfo )

      this.wsConnection = connection
    },
    updateOrder( params: OrderBook ) {
      const updatedBids = params.bids.filter( ( bid ) => +bid[ 1 ] !== 0 )
      const updatedAsks = params.asks.filter( ( ask ) => +ask[ 1 ] !== 0 )

      this.order.bids = [ ...this.order.bids, ...updatedBids ].slice( -400 )
      this.order.asks = [ ...this.order.asks, ...updatedAsks ].slice( -400 )
      this.order.lastUpdateId = params.lastUpdateId
    },
  },
} )
