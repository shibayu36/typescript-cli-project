module.exports = {
  plugins: [],
  extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:import/recommended"],
  env: { node: true, es2020: true },
  overrides: [
    {
      files: ["src/**/*.ts"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:import/typescript",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      rules: {},
    },
  ],
};
