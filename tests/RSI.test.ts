import {
  calculateAvgGainLoss,
  calculateRSI,
  calculateAvgGainLossWithRSSmoothing
} from "../src/lib/oscillators/RSI";
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

  it("Calculate avgGain avgLoss with smoothing.", () => {
    const period = 14;
    const [previousAvgGain, previousAvgLoss] = [0.1971, 0.1939];
    const [gain, loss] = [0, 1.33];

    const currentAvgLoss = calculateAvgGainLossWithRSSmoothing(
      previousAvgLoss,
      period,
      loss
    );
    const currentAvgGain = calculateAvgGainLossWithRSSmoothing(
      previousAvgGain,
      period,
      gain
    );
    expect(floatToFixed(currentAvgLoss)).toBe(0.28);
    expect(floatToFixed(currentAvgGain)).toBe(0.18);
  });

  it("Calculate RSI", () => {
    const RSI = calculateRSI(avgGain, avgLoss);
    expect(floatToFixed(RSI)).toBe(70.46);
  });

  it("Calculate RSI with avgLoss = 0", () => {
    const RSI = calculateRSI(avgGain, 0);
    expect(floatToFixed(RSI)).toBe(100);
  });

  it("Calculate RSI with avgGain = 0", () => {
    const RSI = calculateRSI(0, avgLoss);
    expect(floatToFixed(RSI)).toBe(0);
  });
});
