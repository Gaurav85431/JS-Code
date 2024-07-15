let arr = [13, 32, 45, 3, 2, 43, 643, 2];
let AscSortArray = arr.slice().sort((a, b) => a - b);
let DscSortArray = arr.slice().sort((a, b) => b - a);

let nthNum = 45;

if (arr.length < nthNum) {
  console.log("Not in array ")
}
else {
  console.log("Nth max is ", AscSortArray[nthNum - 1]); //-1 bcz array me hai to 5th value ie.e. 4th index.
  console.log("Nth min is ", DscSortArray[nthNum - 1]);
}
