import StockPrice, {
  getPriceChange,
  getTypicalPrice,
  Status
} from "../src/lib/StockPrice";
import { floatToFixed } from "../src/util/general";

describe("Calculate Typical Price", () => {
  const price = new StockPrice(23.94, 24.2, 23.85, 23.89);

  it("Typical Price", () => {
    const response = getTypicalPrice(price);
    expect(floatToFixed(response)).toBe(23.98);
  });
});

describe("Calculate Stock Gain/Loss", () => {
  let noChangePrice: number;
  const oldPrice = 26.8;
  const newPrice = (noChangePrice = 27.58);
  const lossPrice = 25.12;

  it("Gain", () => {
    const response = getPriceChange(oldPrice, newPrice);
    expect({
      amount: floatToFixed(response.amount),
      percentage: floatToFixed(response.percentage),
      status: response.status
    }).toEqual({
      amount: 0.78,
      percentage: 2.91,
      status: Status.gain
    });
  });

  it("Loss", () => {
    const response = getPriceChange(oldPrice, lossPrice);
    expect({
      amount: floatToFixed(response.amount),
      percentage: floatToFixed(response.percentage),
      status: response.status
    }).toEqual({
      amount: -1.68,
      percentage: -6.27,
      status: Status.loss
    });
  });

  it("No Change", () => {
    const response = getPriceChange(noChangePrice, newPrice);
    expect({
      amount: floatToFixed(response.amount),
      percentage: floatToFixed(response.percentage),
      status: response.status
    }).toEqual({
      amount: 0.0,
      percentage: 0.0,
      status: Status.noChange
    });
  });
});
