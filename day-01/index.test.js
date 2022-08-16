const { push, pop, unshift, shift, hasDuplicates } = require('.');

test('push', () => {
  const arr = ['a', 'b', 'c'];
  const newArray = push(arr, 'z');
  console.log('newArray', newArray);
  expect(newArray).toEqual(4);
});

test('pop', () => {
  const arr = ['apple', 'orange', 'grapes', 'bananas'];
  const newArr = pop(arr);
  expect(newArr).toBe('bananas');
});

test('unshift', () => {
  const arr = ['boi', 'prince'];
  const newArr = unshift(arr, 'Frankie');
  expect(newArr).toEqual(3);
});

test('shift', () => {
  arr = [1, 2, 3, 4];
  expect(shift(arr)).toBe(1);
});

test('hasDuplicates', () => {
  arr1 = ['j', 'y', 't', 'n'];
  arr2 = ['d', 'f', 'o', 'd'];
  expect(hasDuplicates(arr1)).toBe(false);
  expect(hasDuplicates(arr2)).toBe(true);
});
