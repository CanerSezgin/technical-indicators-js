import { calculateAvgGainLoss, calculateRS } from "../src/lib/oscillators/RSI";
import { floatToFixed } from "../src/util/general";

describe("RSI", () => {
  let avgGain: number, avgLoss: number;
  it("Calculate average gain & loss", () => {
    const prices = [
      44.34,
      44.09,
      44.15,
      43.61,
      44.33,
      44.83,
      45.1,
      45.42,
      45.84,
      46.08,
      45.89,
      46.03,
      45.61,
      46.28
    ];
    ({ avgGain, avgLoss } = calculateAvgGainLoss(prices));
    expect(floatToFixed(avgGain)).toBe(0.24);
    expect(floatToFixed(avgLoss)).toBe(0.1);
  });

  it("Calculate RS", () => {
    const RS = calculateRS(avgGain, avgLoss);
    expect(floatToFixed(RS)).toBe(2.39);
  });
});
