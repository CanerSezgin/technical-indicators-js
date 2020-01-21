import { meanDeviation } from "../../util/general";
import Stock from "../Stock";
import averages from "../Averages";

export const calculateCCI = (prices: number[]): number => {
  const price = prices[prices.length - 1];
  const simpleAverage = averages.simple(prices);
  const meanDev = meanDeviation(prices);
  return (price - simpleAverage) / (0.015 * meanDev);
};

// TODO: There might be better way to apply this logic to all technicals
// TODO: Get rid of hard coded priceType array and add more price types for meta data
// such as TypicalPrice
export const CCI = (data: Stock[], period: number) => {
  const name = `CCI_${period}`;
  if (period > data.length) {
    return { status: "error", code: 422, message: "Period exceeded the length of data" };
  }

  for (let i = period - 1; i < data.length; i++) {
    const current = data[i];
    const subData = data.slice(i - period + 1, i + 1);

    const CCI_Results: any = {};
    ["open", "high", "low", "close"].forEach(type => {
      const prices = subData.map(sd => sd.price.close);
      const cci = calculateCCI(prices);
      CCI_Results[type] = cci;
    });

    current.technicals[name] = CCI_Results;
  }

  return data;
};
