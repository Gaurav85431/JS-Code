let arr = [12, 43, 32, 35, 98, 6434, 32, 12, 23, 4, 3]
let sortArr = arr.slice().sort((a, b) => a - b);
console.log("Min =", sortArr[0]);
console.log("Max =", sortArr[sortArr.length - 1])



// Manually
let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i]
  }
  if (max < arr[i]) {
    max = arr[i]
  }
}
console.log("Min and Max is ", min, " ", max)