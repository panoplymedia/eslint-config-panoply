# eslint-config-megaphone

This package provides Megaphones's [`ESLint`](http://eslint.org/) configurations as [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Installation

`npm install --save-dev eslint-config-megaphone`

## Usage

Add `"extends": ["megaphone"]` to your ESLint config file to get the base eslint configuration. You can also use `megaphone/browser`, `megaphone/node`, `megaphone/mocha`, and `megaphone/react`.

## Example

```js
// eslintrc.js

module.exports = {
  "extends": [
    "megaphone",
    "megaphone/browser",
    "megaphone/react"
  ]
};
```
