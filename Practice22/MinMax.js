let arr = [12, 32, 43, 54, 56, 76, 78, 87, 89];
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
console.log("Min is ", AscSort[0], " Max is ", AscSort[arr.length - 1]);
console.log("Min is ", DscSort[arr.length - 1], " Max is ", DscSort[0]);


let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Max is ", max);


let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Min is ", min)