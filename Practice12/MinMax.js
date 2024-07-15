let arr = [12, 32, 43, 54, 75, 87, 67, 97, 870];
let AscSort = arr.slice().sort((a, b) => a - b);
// console.log("Asc sort  ", AscSort);
console.log("Min ", AscSort[0]);
console.log("Max ", AscSort[arr.length - 1])

let DscSort = arr.slice().sort((a, b) => b - a);
// console.log("Dsc Sort ", DscSort)



let max;
for (let i = 0; i < arr.length; i++) {
  max = arr[0];
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Max is ", max);

let min;
for (let i = 0; i < arr.length; i++) {
  min = arr[0];
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Min is ", min);



let strAr = [32, 24, 42, 2, 3, 24, 42, 42, 859, 42, 42, 34, 5, 3, 64, 46];
let Min = Math.min(...strAr);
let Max = Math.max(...strAr);
console.log("Min and Max is ", Min, ' and ', Max)