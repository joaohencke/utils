const { expect } = require('chai');

const flatten = require('./flatten');

describe('array.flatten', () => {
  it('transform an array of array into an array and keep its order', () => {
    const arr = [[1, 2], [3], [4]];

    const expected = [1, 2, 3, 4];

    expect(flatten(arr)).to.have.ordered.members(expected);
  });

  it('return an empty array if no parameters', () => {
    expect(flatten()).to.be.empty;
  });
});
