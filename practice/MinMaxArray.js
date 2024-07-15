let arr = [2, 3, 3, 54, 64, 65, 6754, 43];
let sortArray = arr.slice().sort((a, b) => a - b);

let Min = sortArray[0];
let Max = sortArray[sortArray.length - 1];
console.log("Min and Max ", Min, " ", Max, " .............")



//     2nd way
let min = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i]
  }
}
console.log("Min is ", min);

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i]
  }
}
console.log("Max is ", max)