import { describe, expect, it } from "vitest";
import { coreVersion } from "./index.js";

describe("core", () => {
  it("exposes a version", () => {
    expect(coreVersion).toBe("0.0.0");
  });
});
