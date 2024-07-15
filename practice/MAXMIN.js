let arr = [23, 4, 24, 2, 2, 2, 353, 23, 35];
let sortArray = arr.slice().sort((a, b) => a - b);

console.log("Min is ", sortArray[0], ' and max is ', sortArray[arr.length - 1])

// 2nd 
let min = arr[0];
for (let val of arr) {
  if (min > val) {
    min = val
  }
}
console.log("Min is ", min)

let max = arr[0]; console.log(max, "--")
for (let i = 1; i < max.length; i++) {
  if (max < arr[i]) {
    console.log("arr i", arr[i])
    max = arr[i];
  }
}
console.log("Max is ", max);


// 3rd   math ke min me hm rest se pas kar rhe hia
let minNum = Math.min(...arr);
let maxNum = Math.max(...arr);
console.log(`Max and min are ${minNum} and ${maxNum}`)