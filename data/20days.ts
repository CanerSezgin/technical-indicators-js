import Stock from "../src/lib/Stock";
import StockPrice from "../src/lib/StockPrice";

const prices = [
  new Stock(new Date("01-29-2020"), new StockPrice(23.94, 24.2, 23.85, 23.89)),
  new Stock(new Date("01-28-2020"), new StockPrice(23.85, 24.07, 23.72, 23.95)),
  new Stock(new Date("01-27-2020"), new StockPrice(23.94, 24.04, 23.64, 23.67)),
  new Stock(new Date("01-24-2020"), new StockPrice(23.73, 23.87, 23.36, 23.78)),
  new Stock(new Date("01-23-2020"), new StockPrice(23.6, 23.67, 23.45, 23.49)),
  new Stock(new Date("01-22-2020"), new StockPrice(23.46, 23.58, 23.17, 23.32)),
  new Stock(new Date("01-21-2020"), new StockPrice(23.53, 23.8, 23.39, 23.73)),
  new Stock(new Date("01-20-2020"), new StockPrice(23.73, 23.8, 23.56, 23.79)),
  new Stock(new Date("01-17-2020"), new StockPrice(24.09, 24.3, 24.05, 24.14)),
  new Stock(new Date("01-16-2020"), new StockPrice(23.95, 24.15, 23.77, 23.81)),
  new Stock(new Date("01-15-2020"), new StockPrice(23.92, 24.05, 23.5, 23.78)),
  new Stock(new Date("01-14-2020"), new StockPrice(24.04, 24.06, 23.84, 23.86)),
  new Stock(new Date("01-13-2020"), new StockPrice(23.83, 23.88, 23.64, 23.7)),
  new Stock(new Date("01-10-2020"), new StockPrice(24.05, 25.13, 23.94, 24.95)),
  new Stock(new Date("01-09-2020"), new StockPrice(24.89, 25.19, 24.7, 24.87)),
  new Stock(new Date("01-08-2020"), new StockPrice(24.89, 25.06, 24.76, 24.96)),
  new Stock(new Date("01-07-2020"), new StockPrice(24.91, 25.21, 24.8, 25.17)),
  new Stock(new Date("01-06-2020"), new StockPrice(25.24, 25.37, 24.92, 25.0)),
  new Stock(new Date("01-03-2020"), new StockPrice(25.13, 25.36, 24.95, 25.27)),
  new Stock(new Date("01-02-2020"), new StockPrice(25.26, 25.26, 24.92, 24.99))
];

export default prices;
