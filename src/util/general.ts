/**
 *
 * @param value
 * @param decimal @default [<2>]
 */
export const floatToFixed = (value: number, decimal: number = 2): number =>
  parseFloat(value.toFixed(decimal));
