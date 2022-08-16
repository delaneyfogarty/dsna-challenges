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
  for (let i = 0; i < arr.length; i--) {
    // remove first item in the array
    arr - arr[0];
    // adjust index of every item to 'shift'
    arr[i] = arr[i - 1];
  }
  return arr[0];
  // return removed item
}

function hasDuplicates(arr) {
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
}

module.exports = { push, pop, unshift, shift, hasDuplicates };
