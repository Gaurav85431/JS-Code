let arr = [23, 24, 42, 5, 3948, 46, 6, 7, 7, 6, 93, 5, 45, 46, 64, 4, 34, 34, 34];

let Max = Math.max(...arr);
let Min = Math.min(...arr);
console.log("Max and min is ", Max, " and ", Min)


let AscSort = arr.slice().sort((a, b) => a - b);
console.log("Min is ", AscSort[0]);
console.log("Max is ", AscSort[arr.length - 1]);

let Maxchar = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (Maxchar > arr[i]) {
    Maxchar = arr[i]
  }
}
console.log("Max char is ", Maxchar)

let MinChar = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (MinChar < arr[i]) {
    MinChar = arr[i]
  }
}
console.log("Min char is ", MinChar)