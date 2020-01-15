import { calculateProfitLoss, Status } from "../src/lib/StockPrice";

describe("Calculate Stock Profit/Loss", () => {
  let noChangePrice: number;
  const oldPrice = 26.8;
  const newPrice = (noChangePrice = 27.58);
  const lossPrice = 25.12;

  it("Profit", () => {
    const response = calculateProfitLoss(oldPrice, newPrice);
    expect(response).toEqual({
      amount: 0.78,
      percentage: 2.91,
      status: Status.profit
    });
  });

  it("Loss", () => {
    const response = calculateProfitLoss(oldPrice, lossPrice);
    expect(response).toEqual({
      amount: -1.68,
      percentage: -6.27,
      status: Status.loss
    });
  });

  it("No Change", () => {
    const response = calculateProfitLoss(noChangePrice, newPrice);
    expect(response).toEqual({
      amount: 0.0,
      percentage: 0.0,
      status: Status.noChange
    });
  });
});
