import data from "../data/20days";
import { CCI } from "../src/lib/oscillators/CCI";

describe("Calculate Technicals", () => {
  it("CCI", () => {
    CCI(data, 3);
  });
});
