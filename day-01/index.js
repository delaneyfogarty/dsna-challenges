function push(arr, item) {
  // add a new item to the end of the array
  // end of the array is arr[arr.length]
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr) {
  poppedItem = arr[arr.length - 1];
  // remove last item of array
  arr.length = arr.length - 1;
  // return that last item that was removed
  return poppedItem;
}

function unshift(arr, item) {
  //loop through the array and increase each item's index by one
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    item = arr[0];
    // add new item into index 0
  }

  return arr.length + 1;
  // return the new length of the array
}

function shift(arr) {
  for (let i = 0; i > arr.length; i--) {
    // remove first item in the array
    arr - arr[0];
    // adjust index of every item to 'shift'
    arr[i] = arr[i - 1];
  }
  return arr[0];
  // return removed item
}

function hasDuplicates(arr) {
  let alreadySeen = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (alreadySeen.indexOf(value) !== -1) {
      return true;
    }
    alreadySeen.push(value);
  }
  return false;
}

// declare an empty obj
// let obj = {};
// // loop over the array
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     return true;
//     break;
//   } else {
//     return false;
//   }
// }

// day 2!

function filter(arr, predicate) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) newArray.push(arr[i]);
  }
  return newArray;
}

const addPunctuation = (punctuation) => (phrase) => phrase + punctuation;

function map(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const transformed = callback(arr[i]);
    newArray.push(transformed);
  }
  return newArray;
}

function repeat(txt, n) {
  // if n is less than 0, return an empty string
  if (n < 0) return '';
  // if n is equal to 1, return the given txt
  if (n === 1) return txt;
  // else return the text plus the txt times one less than n since the initial text counts as one of the numbers of n
  else return txt + repeat(txt, n - 1);
  //if the number of times the string is repeated  does not equal n, then keep going
}

// function largestEven(arr) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     // console.log('newArray', newArray);
//     if (arr[i] % 2 === 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   if (newArray.length === 0) {
//     return -1;
//   } else {
//     console.log('newArray', newArray);
//     const largestNumber = Math.max(...newArray);
//     return largestNumber;
//   }
// }

function largestEven(arr, maxEven = -1) {
  if (!arr.length) return maxEven;
  const num = arr.pop();
  if (num % 2 === 0 && num > maxEven) maxEven = num;
  return largestEven(arr, maxEven);
}

module.exports = {
  push,
  pop,
  unshift,
  shift,
  hasDuplicates,
  filter,
  addPunctuation,
  map,
  repeat,
  largestEven,
};
