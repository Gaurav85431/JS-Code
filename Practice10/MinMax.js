let arr = [1, 2, 34, 35, 23, 1, 89, 3, 5, 46, 57, 45, 3, 53, 46, 4, 645, 894, 6, 57, 46, 53, 53, 5];
let Sort = arr.slice().sort((a, b) => a - b);
let MaxVal = Sort[arr.length - 1];
let MinVal = Sort[0];
console.log("Max and Min value is ", MaxVal, " ", MinVal)


let arry = [1, 2, 34, 35, 23, 1, 89, 3, 5, 46, 57, 45, 3, 53, 46, 4, 645, 894, 6, 57, 46, 53, 53, 5];
let MinV = Math.min(...arry);
let MaxV = Math.max(...arry);
console.log("Min and Max value is ", MinV, "  ", MaxV)

// Manually Min & Max :__________________
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  // min = arr[0];❌
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Min value is ", min);



let arrr = [1, 2, 34, 35, 23, 1, 89, 3, 5, 46, 57, 45, 3, 53, 46, 4, 645, 894, 6, 57, 46, 53, 53, 5];
let max = arrr[0];
for (let i = 0; i < arrr.length; i++) {
  // max = arrr[0]; ❌
  if (max < arrr[i]) {
    max = arrr[i]
  }
}
console.log("Max is ", max);



