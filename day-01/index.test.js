const {
  push,
  pop,
  filter,
  unshift,
  hasDuplicates,
  shift,
  addPunctuation,
  map,
  repeat,
  largestEven,
} = require('.');

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
  const arr = [1, 2, 3, 4];
  expect(shift(arr)).toBe(1);
});

test('hasDuplicates', () => {
  arr1 = ['j', 'y', 't', 'n'];
  arr2 = ['d', 'f', 'o', 'd'];
  expect(hasDuplicates(arr1)).toBe(false);
  expect(hasDuplicates(arr2)).toBe(true);
});

// day 2!

test('filter', () => {
  expect(filter([2, 6, 5], (n) => n % 2 === 0)).toEqual([2, 6]);
});

test('addPunctuation', () => {
  const addExcitement = addPunctuation('!!!');
  expect(addExcitement('Hello World')).toBe('Hello World!!!');
});

test('map', () => {
  expect(map([1, 6, 5], (n) => n ** 2)).toEqual([1, 36, 25]);
});

test('repeat', () => {
  expect(repeat('ab', 3)).toEqual('ababab');
  expect(repeat('kiwi', 1)).toEqual('kiwi');
  expect(repeat('cherry', 2)).toEqual('cherrycherry');
});

test('largestEven', () => {
  expect(largestEven([3, 7, 2, 1, 7, 9, 10, 13])).toEqual(10);
  expect(largestEven([1, 3, 5, 7])).toEqual(-1);
  expect(largestEven([0, 19, 18973623])).toEqual(0);
});
