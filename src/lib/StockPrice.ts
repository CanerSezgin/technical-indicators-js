export enum Status {
  gain = "Gain",
  loss = "Loss",
  noChange = "No Change"
}

interface GainLoss {
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

export const getTypicalPrice = (price: StockPrice): number =>
  (price.high + price.low + price.close) / 3;

export const getPriceChange = (
  oldPrice: number,
  newPrice: number
): GainLoss => {
  let status;
  const amount = newPrice - oldPrice;
  const percentage = (amount / oldPrice) * 100;

  if (amount > 0) status = Status.gain;
  else if (amount < 0) status = Status.loss;
  else status = Status.noChange;

  return {
    status,
    amount,
    percentage
  };
};
