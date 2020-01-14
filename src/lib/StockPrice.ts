export default class StockPrice {
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly close: number;

  constructor(open: number, high: number, low: number, close: number) {
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
  }
}
