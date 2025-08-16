module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "prefer-const": "error",
    "no-var": "error",
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
