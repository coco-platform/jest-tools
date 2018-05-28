# @coco-platform/jest-tools

![Build Status](https://img.shields.io/travis/coco-platform/jest-tools/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-platform/jest-tools/badge.svg?branch=master)](https://coveralls.io/github/coco-platform/jest-tools?branch=master)
![Package Dependency](https://david-dm.org/coco-platform/jest-tools.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-platform/jest-tools/dev-status.svg?style=flat)

A tools presets for jest."

## Usage

```javascript
module.exports = {
  transform: {
    '\\.(jpg|jpeg|png|giff|webp|svg)$':
      '@coco-platform/jest-tools/lib/asset-transformer.js',
  },
  moduleNameMapper: {
    '\\.css$': '@coco-platform/jest-tools/lib/css-ignore.js',
    '\\.pcss': '@coco-platform/jest-tools/lib/css-modules.js',
  },
};
```

## Contribute

```shell
npm test;
```

# Licence

MIT
