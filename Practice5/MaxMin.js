// Max and Min 
let arr = [12, 23, 43, 53, 54, 35, 34, 2, 4];
let sortArr = arr.slice().sort((a, b) => a - b);
console.log("Min value is ", sortArr[0]);
console.log("Max value is ", sortArr[sortArr.length - 1]);



// Max and Min at Particular index.
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
let index = 6;
if (index >= 0 && index <= AscSort.length)
  console.log(`${index} index per max value ${AscSort[index - 1]} aur min value ${DscSort[index - 1]}`);
else
  console.log("ArrayIndexOutOfBoundsException")