/**
 * @description - Mapping `import styles from '*.p?css'` into plain object for jest
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
module.exports = new Proxy(
  {},
  {
    get: (_, key) => (key === '__esModule' ? false : key),
  }
);
