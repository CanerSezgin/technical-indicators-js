import StockPrice from "./StockPrice";

interface ITechnicals {
  [key: string]: any;
}

class Stock {
  readonly date: Date;
  readonly price: StockPrice;
  technicals: ITechnicals;

  constructor(date: Date, price: StockPrice) {
    this.date = date;
    this.price = price;
    this.technicals = {};
  }
}

export default Stock;
