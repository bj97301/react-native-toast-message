module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  root: true,
  globals: {
    __DEV__: false,
    fetch: false,
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react-hooks", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-cycle": "error",
    "react/prop-types": [
      "error",
      { ignore: ["navigation", "children", "route"] },
    ],
  },
};
