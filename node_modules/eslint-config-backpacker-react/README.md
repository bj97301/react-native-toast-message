# eslint-config-backpacker-react

[![npm version](https://img.shields.io/npm/v/eslint-config-backpacker-react)](https://www.npmjs.com/package/eslint-config-backpacker-react)
[![Build](https://github.com/backpacker/eslint-config-react/actions/workflows/build.yml/badge.svg)](https://github.com/backpacker/eslint-config-react/actions?query=workflow%3Abuild)

Extends [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [a few others](./package.json).

To install, run

```sh
yarn add --dev eslint-config-backpacker-react
```

Then extend it inside your `.eslintrc.js` file

```js
module.exports = {
  ...
  extends: [
    "backpacker-react",
  ],
};
```

## Import sort plugin

To automatically sort imports with prettier, use [prettier-plugin-import-sort](https://github.com/ggascoigne/prettier-plugin-import-sort) with [import-sort-style-module](https://www.npmjs.com/package/import-sort-style-module). Then add the following configuration in `package.json`:

```js
"importSort": {
    ".js, .jsx, .ts, .tsx": {
      "style": "module"
    }
}
```
