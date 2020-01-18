import { meanDeviation } from "../../util/general";
import StockPrice, { getPriceChange, Status, getTypicalPrice } from "../StockPrice";
import averages from "../Averages";

export const calculateCCI = (prices: number[]): number => {
  const price = prices[prices.length - 1];
  const simpleAverage = averages.simple(prices);
  const meanDev = meanDeviation(prices);
  return (price - simpleAverage) / (0.015 * meanDev);
};
