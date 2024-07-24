let arr = [21, 32, 43, 54, 65, 56, 84, 53, 98, 76, 97, 89];
let Min = Math.min(...arr);
let Max = Math.max(...arr);
console.log("Max and Min value is ", Max, " & ", Min);


let max = arr[0], min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i]
  }
  if (min > arr[i]) {
    min = arr[i]
  }
}
console.log("Max and Min is ", max, " and ", min)