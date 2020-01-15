import Averages from "../src/lib/Averages";

const averages = new Averages();

describe("Averages", () => {
  it("Single Average", () => {
    const prices = [3, 9, 1.2, 2.5, 7.9];
    const simpleAverage = averages.simple(prices);
    expect(simpleAverage).toBe(4.72);
  });

  it("Weighted Average", () => {
    const prices = [23.06, 23.28, 22.92, 22.7];
    const weightedAverage = averages.weighted(prices);
    expect(weightedAverage).toBe(23.06);
  });

  it("Exponential Average", () => {
    const timePeriod = 3;
    const price = 22.92;
    const previousEMA = 22.61;

    const EMA = averages.exponential(timePeriod, price, previousEMA);
    expect(EMA).toBe(22.77);
  });
});
