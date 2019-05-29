
const kangaroo = require('./../kangaroo');

test('adds 1 + 2 to equal 3', () => {
  expect(kangaroo.sum(1, 2)).toBe(3);
});

test('Yes/NO', () => {
  expect( kangaroo.kangaroo(0, 3, 9950, 2) ).toBe('NO');
  expect( kangaroo.kangaroo(0, 3, 4, 2) ).toBe('YES');
});

test('Casos Borde', () => {
  expect( kangaroo.kangaroo(0, 2, 5, 3) ).toBe('NO');
  expect( kangaroo.kangaroo(0, 2, 0, 3) ).toBe('NO');
  expect( kangaroo.kangaroo(1, 2, 0, 3) ).toBe('NO');
  expect( kangaroo.kangaroo(0, 0, 4, 3) ).toBe('NO');
  expect( kangaroo.kangaroo(-2, 1, 6, 3) ).toBe('NO');
})