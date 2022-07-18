module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {},
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
