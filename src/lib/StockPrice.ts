import { floatToFixed } from "../util/general";

export enum Status {
  profit = "Profit",
  loss = "Loss",
  noChange = "No Change"
}

interface ProfitLoss {
  status: string;
  amount: number;
  percentage: number;
}

// TODO: date might be necessary
export default class StockPrice {
  readonly open: number;
  readonly high: number;
  readonly low: number;
  readonly close: number;

  constructor(open: number, high: number, low: number, close: number) {
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
  }
}

export const calculateProfitLoss = (
  oldPrice: number,
  newPrice: number
): ProfitLoss => {
  let status;
  const amount = newPrice - oldPrice;
  const percentage = (amount / oldPrice) * 100;

  if (amount > 0) status = Status.profit;
  else if (amount < 0) status = Status.loss;
  else status = Status.noChange;

  return {
    status,
    amount: floatToFixed(amount, 2),
    percentage: floatToFixed(percentage, 2)
  };
};
