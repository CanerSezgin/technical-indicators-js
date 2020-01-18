import { floatToFixed } from "../src/util/general";

import { calculateCCI } from "../src/lib/oscillators/CCI";
import StockPrice, { getTypicalPrice } from "../src/lib/StockPrice";

const prices = [
  new StockPrice(23.94, 24.2, 23.85, 23.89),
  new StockPrice(23.85, 24.07, 23.72, 23.95),
  new StockPrice(23.94, 24.04, 23.64, 23.67),
  new StockPrice(23.73, 23.87, 23.36, 23.78),
  new StockPrice(23.6, 23.67, 23.45, 23.49),
  new StockPrice(23.46, 23.58, 23.17, 23.32),
  new StockPrice(23.53, 23.8, 23.39, 23.73),
  new StockPrice(23.73, 23.8, 23.56, 23.79),
  new StockPrice(24.09, 24.3, 24.05, 24.14),
  new StockPrice(23.95, 24.15, 23.77, 23.81),
  new StockPrice(23.92, 24.05, 23.5, 23.78),
  new StockPrice(24.04, 24.06, 23.84, 23.86),
  new StockPrice(23.83, 23.88, 23.64, 23.7),
  new StockPrice(24.05, 25.13, 23.94, 24.95),
  new StockPrice(24.89, 25.19, 24.7, 24.87),
  new StockPrice(24.89, 25.06, 24.76, 24.96),
  new StockPrice(24.91, 25.21, 24.8, 25.17),
  new StockPrice(25.24, 25.37, 24.92, 25.0),
  new StockPrice(25.13, 25.36, 24.95, 25.27),
  new StockPrice(25.26, 25.26, 24.92, 24.99)
];

describe("CCI", () => {
  it("Calculate CCI with ClosePrices", () => {
    const closePrices = prices.map(price => price.close);
    const CCI = calculateCCI(closePrices);
    expect(floatToFixed(CCI)).toBe(90.61);
  });

  it("Calculate CCI with TypicalPrices", () => {
    const typicalPrices = prices.map(price => getTypicalPrice(price));
    const CCI = calculateCCI(typicalPrices);
    expect(floatToFixed(CCI)).toBe(103.35);
  });
});
