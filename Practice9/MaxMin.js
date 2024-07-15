let arr = [23, 43, 34, 34, 5, 46, 46, 6, 86, 86, 655, 454];
let sort = arr.slice().sort((a, b) => a - b);
console.log("Max is ", sort[arr.length - 1]);
console.log("min is ", sort[0])





// 2nd way
let Max = Math.max(...arr);
let Min = Math.min(...arr);
console.log("Max and Min is ", Max, " &  ", Min)



// 3rd way
let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  if (max < arr[i]) {
    max = arr[i]
  }
}
console.log("Max and Min is ", max, "  ", min)