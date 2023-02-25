//corner-case
const getPercents = require('./getpercent');

it('percent 30', () => {
  expect(getPercents(-30, 100)). toBe(30);
});