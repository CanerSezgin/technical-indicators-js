import data from "../data/20days";
import { CCI } from "../src/lib/oscillators/CCI";

// Write a test
describe("Calculate Technicals", () => {
  it("CCI", () => {
    console.log(CCI(data, 3));
  });
});
