// 1111111111111111111111
let arr = [1, 32, 4, 223, 42, 3, 54, 664, 47, 45, 64, 75, 86, 557, 34];
let Asc = arr.slice().sort((a, b) => a - b);
let Dsc = arr.slice().sort((a, b) => b - a);

console.log(`Min is ${Asc[0]}  and Max is ${Asc[arr.length - 1]}`)





// 2222222222222222222222
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
    max = arr[i];
  }
}
console.log("Max is ", max)





// 33333333333333333
let Max = Math.min(...arr);
let Min = Math.max(...arr);
console.log(`Max is ${Max}  and Min is ${Min}`)