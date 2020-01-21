import StockPrice from "./StockPrice";

class Stock {
  readonly date: Date;
  readonly price: StockPrice;
  technicals: Object;

  constructor(date: Date, price: StockPrice) {
    this.date = date;
    this.price = price;
    this.technicals = {};
  }
}

export default Stock;
