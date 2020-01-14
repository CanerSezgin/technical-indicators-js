export default class Averages {
  /**
   * Simple Average
   */
  simple(prices: number[]): number {
    const total = prices.reduce((cum: number, acc: number) => cum + acc, 0);
    return total / prices.length;
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
