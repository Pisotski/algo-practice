import { describe, it, expect } from "vitest";
import countResponseTimeRegressions from "./countResponseTimeRegressions";

describe("countResponseTimeRegressions", () => {
  it("returns 0 for an empty array", () => {
    expect(countResponseTimeRegressions([])).toBe(0);
  });

  it("returns 0 for a single element array", () => {
    expect(countResponseTimeRegressions([100])).toBe(0);
  });

  it("counts numbers greater than the average of previous elements", () => {
    // previous averages: [100], [100,200] -> avg 150, [100,200,150] -> avg 150
    expect(countResponseTimeRegressions([100, 200, 150, 300])).toBe(2);
  });

  it("returns 0 when no numbers exceed previous average", () => {
    expect(countResponseTimeRegressions([300, 200, 100])).toBe(0);
  });

  it("handles repeated numbers correctly", () => {
    expect(countResponseTimeRegressions([100, 100, 100, 100])).toBe(0);
  });
});
