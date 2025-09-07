import eslintPluginAstro from "esling-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-ally-recommended"],
  {
    rules: {},
  },
];
