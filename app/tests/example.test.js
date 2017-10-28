const expect = require('expect');

describe('example failing test for travis build', () => {

  it('I am failing :(', () => {
    expect(2).toBe(3);
  });

});