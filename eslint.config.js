// Flat config for ESLint v9 + Astro + TS + jsx-a11y

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import astroParser from "astro-eslint-parser";

export default [
  // Ignore build output & deps
  { ignores: ["dist/**", "node_modules/**"] },

  // Base JS
  js.configs.recommended,

  // TypeScript (for .ts/.tsx)
  ...tseslint.configs.recommended,

  // Astro’s flat preset (array → spread)
  ...astroPlugin.configs["flat/recommended"],

  // jsx-a11y flat config (object → DO NOT spread)
  jsxA11y.flatConfigs.recommended,

  // Astro files: wire parser + any extra rules
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      // The preset already sets parserOptions; we typically don't need more here.
      globals: globals.browser,
    },
    rules: {
      "astro/no-unused-css-selector": "warn",
    },
  },

  // JS/TS files: browser + node globals (Vite/Astro env)
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];