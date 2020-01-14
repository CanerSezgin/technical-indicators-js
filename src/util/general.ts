export const floatToFixed = (value: number, decimal: number): number =>
  parseFloat(value.toFixed(decimal));
