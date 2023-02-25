//unit tests
const getPercents = require('./getpercent');

it('percent 30', () => {
  expect(getPercents(30, 100)). toBe(30);
}),
it('percent 40', () => {
    expect(getPercents(40, 100)). toBe(40);
  }),
  it('percent 50', () => {
    expect(getPercents(50, 100)). toBe(50);
  })
;