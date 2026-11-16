import { describe, expect, it } from "vitest";
import { viewerVersion } from "./index.js";

describe("viewer", () => {
  it("exposes a version", () => {
    expect(viewerVersion).toBe("0.0.0");
  });
});
