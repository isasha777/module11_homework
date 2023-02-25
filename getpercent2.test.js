//test case
const getPercents = require('./getpercent');

it('percent 60', () => {
  expect(getPercents(30, 200)). toBe(60);
});