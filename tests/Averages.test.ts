import Averages from "../src/lib/Averages";

const averages = new Averages();

describe("Averages", () => {
  it("Single Average", () => {
    const prices = [3, 6, 9, 22];
    const result = averages.simple(prices);
    expect(result).toBe(10);
  });
});
