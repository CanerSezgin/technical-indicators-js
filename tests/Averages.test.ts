import { floatToFixed } from "../src/util/general";
import Averages from "../src/lib/Averages";

const averages = new Averages();

describe("Averages", () => {
  const prices = [3, 9, 1.2, 2.5, 7.9];
  const simpleAverage = averages.simple(prices);
  it("Single Average", () => {
    expect(floatToFixed(simpleAverage, 2)).toBe(4.72);
  });

  it("Exponential Average", () => {
    const timePeriod = 3;
    const price = 22.92;
    const previousEMA = 22.61;

    const EMA = averages.exponential(timePeriod, price, previousEMA);
    expect(floatToFixed(EMA, 2)).toBe(22.77);
  });
});
