module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: ["react-app", "react-app/jest", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
  },
}
