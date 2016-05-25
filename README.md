# eslint-config-panoply

This package provides Panoplys's [`ESLint`](http://eslint.org/) configurations as [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Installation

`npm install --save-dev eslint-config-panoply`

## Usage

Add `"extends": ["panoply"]` to your ESLint config file to get the base eslint configuration. You can also use `panoply/browser`, `panoply/node`, `panoply/mocha`, and `panoply/react`.

## Example

```js
// eslintrc.js

module.exports = {
  "extends": [
    "panoply",
    "panoply/browser",
    "panoply/react"
  ]
};
```
