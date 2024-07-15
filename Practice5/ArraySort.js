let arrr = [1, 6, 87, 5, 9, 43, 64, 6, 9, 7, 68, 7, 6, 4, 43, 36, 63, 76, 3, 383, 38, 36, 3, 2, 652, 26, 76];
let sort = arrr.slice().sort((a, b) => a - b);
console.log(sort)




// Manually:
// Ascending
let arr = arrr.slice();
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log('Ascending sort is ', arr);

// Descending
let ary = arrr.slice();
for (let i = 0; i < ary.length; i++) {
  for (let j = 0; j < ary.length - i - 1; j++) {
    if (ary[j] < ary[j + 1]) {
      let temp = ary[j];
      ary[j] = ary[j + 1];
      ary[j + 1] = temp;
    }
  }
}
console.log("Descending sorted is ", ary)