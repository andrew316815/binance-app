import { DepthStream } from '@/helpers/types/types'

export const openWebSocket = ( currency: string, cb: ( stream: DepthStream ) => void ): WebSocket => {
  const connection = new WebSocket( import.meta.env.VITE_WS_URL + currency.toLocaleLowerCase() + '@depth' )

  connection.onopen = () => {
    console.log( `Connection opened with pair ${ currency } has opened` )
  }

  connection.onmessage = ( e ) => cb( JSON.parse( e.data ) as DepthStream )

  return connection
}
