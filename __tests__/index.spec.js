/**
 * @description - jest-tools suits
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

const path = require('path');

describe('jest-tools suits', () => {
  it('should process static asset', () => {
    // eslint-disable-next-line global-require
    const assetTransformer = require('../lib/asset-transformer');
    const target = path.resolve(__dirname, '__fixture__', 'demo.jpg');
    const result = assetTransformer.process(null, target);

    expect(result).toMatchSnapshot();
  });

  it('should transform status asset within jest', () => {
    // eslint-disable-next-line global-require
    const demo = require('./__fixture__/demo.jpg');

    expect(demo).toMatchSnapshot();
  });

  it('should ignore static css / pcss import', () => {
    // eslint-disable-next-line global-require
    const cssIgnore = require('../lib/css-ignore');

    expect(cssIgnore).toEqual({});
  });

  it('should ignore static css / pcss import within jest', () => {
    // eslint-disable-next-line global-require
    const demo = require('./__fixture__/demo.css');

    expect(demo).toEqual({});
  });

  it('should mapping css modules property', () => {
    // eslint-disable-next-line global-require
    const identityProxy = require('../lib/css-modules');

    expect(identityProxy.hello).toEqual('hello');
  });

  it('should mapping css modules property', () => {
    // eslint-disable-next-line global-require
    const identityProxy = require('../lib/css-modules');

    expect(Reflect.get(identityProxy, '__esModule')).toBeFalsy();
  });

  it('should mapping css modules property within jest', () => {
    // eslint-disable-next-line global-require
    const demo = require('./__fixture__/demo.pcss');

    expect(demo.hello).toEqual('hello');
  });
});
