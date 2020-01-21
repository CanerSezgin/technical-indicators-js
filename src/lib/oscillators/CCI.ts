import { meanDeviation } from "../../util/general";
import Stock from "../IStock";
import averages from "../Averages";

export const calculateCCI = (prices: number[]): number => {
  const price = prices[prices.length - 1];
  const simpleAverage = averages.simple(prices);
  const meanDev = meanDeviation(prices);
  return (price - simpleAverage) / (0.015 * meanDev);
};

export const CCI = (data: Stock[], period: number) => {
  if (period > data.length) {
    return { status: "error", code: 422, message: "Period exceeded the length of data" };
  }

  for (let i = period - 1; i < data.length; i++) {
    console.log("!!", data[i]);
    const subData = data.slice(i - period + 1, i + 1);

    const CCI_Results: any = {};
    ["open", "high", "low", "close"].forEach(type => {
      const prices = subData.map(sd => sd.price.close);
      const cci = calculateCCI(prices);
      CCI_Results[type] = cci;
    });

    console.log({ i, subData, CCI_Results });
  }
};
