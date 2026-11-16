import { describe, expect, it } from "vitest";
import { builderVersion } from "./index.js";

describe("builder", () => {
  it("exposes a version", () => {
    expect(builderVersion).toBe("0.0.0");
  });
});
