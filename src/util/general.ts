/**
 * @param value
 * @param decimal @default [<2>]
 */
export const floatToFixed = (value: number, decimal: number = 2): number => parseFloat(value.toFixed(decimal));

/**
 * How far, on average, all values are from the middle.
 * @param dataSet
 */
export const meanDeviation = (dataSet: number[]): number => {
  const avg = dataSet.reduce((cum: number, val: number) => cum + val, 0) / dataSet.length;
  return dataSet.reduce((cum: number, val: number) => cum + Math.abs(avg - val), 0) / dataSet.length;
};
