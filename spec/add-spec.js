/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const app = require('../index.js');

// eslint-disable-next-line no-undef
describe('Addition', function () {
  it('The function should add 2 numbers', function () {
    const value = app.AddNumber(5, 6);
    expect(value).toBe(11);
  });
});
