let arr = [12, 32, 34, 54, 56, 67, 87, 56, 76, 87, 98, 67, 99]
let Max = Math.max(...arr);
let Min = Math.min(...arr);
console.log("Max ", Max, " and Min ", Min);


let arrr = [21, 23, 44, 53, 65, 67, 88, 79, 98, 89];
let AscSort = arrr.slice().sort((a, b) => a - b);
let min = AscSort[0];
let max = AscSort[arrr.length - 1]
console.log("Min and Max ", min, " ", max);


let mx = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (mx < arr[i]) {
    mx = arr[i];
  }
}
console.log("Max is ", mx);

let mn = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (mn > arr[i]) {
    mn = arr[i];
  }
}
console.log("Min is ", mn);