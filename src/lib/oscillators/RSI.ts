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

/**
 * This smooting is used if previousAvgGain or previousAvgLoss is known
 * @param previousAvgGL Previous avgGain or avgLoss
 * @param period
 * @param currentGL Current Gain or Loss
 */
export const calculateAvgGainLossWithRSSmoothing = (
  previousAvgGL: number,
  period: number,
  currentGL: number
): number => (previousAvgGL * (period - 1) + currentGL) / period;

export const calculateRSI = (avgGain: number, avgLoss: number): number => {
  if (avgLoss === 0) {
    return 100;
  }
  if (avgGain === 0) {
    return 0;
  }
  const RS = avgGain / avgLoss;
  const RSI = 100 - 100 / (1 + RS);
  return RSI;
};
