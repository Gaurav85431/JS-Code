let arr = [23, 43, 54, 65, 7, 485, 934, 342, 398.53, 34, 98, 23, 23, 34, 23]
let Max = Math.max(...arr);
let Min = Math.min(...arr);
console.log("max ", Max, " and min ", Min)

let AscSort = arr.slice().sort((a, b) => a - b);
let max = AscSort[arr.length - 1];
let min = AscSort[0];
console.log("Max and Min is ", max, "  ", min)


let maxval = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
  if (maxval < arr[i]) {
    maxval = arr[i]
  }
}
console.log("Max val is ", maxval);


let minVal = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (minVal > arr[i]) {
    minVal = arr[i]
  }
}
console.log("Max & min is ", maxval, " & ", minVal)