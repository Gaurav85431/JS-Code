let arr = [23, 34, 43, 43, 434, 45, 4554, 434546, 45, 34, 34, 3, 35, 35, 4553, 5, 45, 3, 53, 3, 353, 3, 535, 553, 35]
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
console.log('Min value is ', AscSort[0]);
console.log('Max value is ', DscSort[0]);
console.log('Max value is ', AscSort[arr.length - 1]);
console.log('Min value is ', DscSort[arr.length - 1]);

let min = Math.min(...arr);
let max = Math.max(...arr);
console.log("Min and Max is ", min, " and ", max);


let Max = arr[0];
for (let itm of arr) {
  if (itm > Max) {
    Max = itm;
  }

}
console.log("Max is ", Max);


let Min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (Min > arr[i]) {
    Min = arr[i];
  }
}
console.log("Min is ", Min)