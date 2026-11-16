import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "viewer/test-results/**",
      "viewer/playwright-report/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
);
