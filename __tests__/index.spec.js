/**
 * @description - jest-tools suits
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

const demo = require('./__fixture__/demo.jpg');

describe('jest-tools suits', () => {
  it('should transform status asset', () => {
    expect(demo).toMatchSnapshot();
  });
});
