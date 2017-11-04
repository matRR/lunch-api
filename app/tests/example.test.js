const expect = require('expect');

describe('example success test for travis build', () => {

  it('I am not failing :)', () => {
    expect(3).toBe(3);
  });

  it('I am not failing :) too', () => {
    expect(310).toBe(310);
  });

});