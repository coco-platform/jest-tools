/**
 * @description - adapt webpack static asset import for jest
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
// Native
const path = require('path');

module.exports = {
  process(_, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
