export type CountItem = [ string, string ] 

export interface OrderBook {
  lastUpdateId: number,
  bids: CountItem[],
  asks: CountItem[]
}

export interface LogData {
  prev: string,
  new: string,
  date: Date
}

export interface DepthStream {
  e: string,
  E: number,
  s: string,
  U: number,
  u: number,
  b: CountItem[],
  a: CountItem[],
}
