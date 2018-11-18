const { expect } = require('chai');

const is = require('./is');

describe('object.is', () => {
  it('check if an Array is an Array', () => {
    const arr = [];

    const expected = is('Array', arr);
    expect(expected).to.be.true;
  });

  it('check if an Object is an Array', () => {
    const object = {};
    const expected = is('Array', object);
    expect(expected).to.be.false;
  });

  it('check if an array is an Array', () => {
    const arr = [];
    const expected = is('array', arr);
    expect(expected).to.be.true;
  });
});
