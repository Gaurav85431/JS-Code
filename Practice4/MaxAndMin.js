let arr = [3, 32, 12, 42, 23, 3, 12, 1313, 41, 43];
let sortArr = arr.slice().sort((a, b) => a - b);

console.log("Max and Min array is ", sortArr[arr.length - 1], "   ", sortArr[0]);





let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }

}
console.log("max is ", max);

let Min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < Min) {
    Min = arr[i];
  }
}
console.log("Min is ", Min);



let MaxVal = Math.max(...arr);
let MinVal = Math.min(...arr);
console.log("Max and Min is ", MaxVal, " ", MinVal)