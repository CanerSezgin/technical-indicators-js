export default class Averages {
  simple(prices: number[]): number {
    const total = prices.reduce((cum: number, acc: number) => cum + acc, 0);
    return total / prices.length;
  }
}
