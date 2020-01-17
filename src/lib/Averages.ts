import { floatToFixed } from "../util/general";

export default class Averages {
  /**
   * Simple Average
   * @param prices First element of the array has the oldest date
   */
  simple(prices: number[]): number {
    const n = prices.length;
    const total = prices.reduce((cum: number, val: number) => cum + val, 0);
    return total / n;
  }

  /**
   * Weighted Average
   * @param prices First element of the array has the oldest date
   */
  weighted(prices: number[]): number {
    const n = prices.length;
    let i = n + 1;
    const divider = (n * (n + 1)) / 2;
    const total = prices.reduce((cum: number, val: number) => {
      i--;
      return cum + val * i;
    }, 0);
    return total / divider;
  }

  /**
   * Exponential Average:
   * If there is no previousEMA, use SMA
   */
  exponential(timePeriod: number, price: number, previousEMA: number): number {
    const multiplier = 2 / (timePeriod + 1);
    return (price - previousEMA) * multiplier + previousEMA;
  }
}
