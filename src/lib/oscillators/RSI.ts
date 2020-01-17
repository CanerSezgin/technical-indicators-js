import { getPriceChange, Status } from "../StockPrice";

/**
 * Average Gain & Loss is calculated by adding up gain/loss during particular period and total amount is divided by Period Length
 * @param prices First element of the array has the oldest date
 */
export const calculateAvgGainLoss = (
  prices: number[]
): { avgGain: number; avgLoss: number } => {
  const n = prices.length;
  const changes = {
    gain: 0,
    loss: 0
  };
  for (let i = 0; i < prices.length; i++) {
    if (i) {
      const change = getPriceChange(prices[i - 1], prices[i]);
      if (change.status === Status.gain) {
        changes.gain += change.amount;
      } else if (change.status === Status.loss) {
        changes.loss += change.amount;
      }
    }
  }

  return {
    avgGain: changes.gain / n,
    avgLoss: (-1 * changes.loss) / n
  };
};

export const calculateRS = (avgGain: number, avgLoss: number): number =>
  avgGain / avgLoss;
