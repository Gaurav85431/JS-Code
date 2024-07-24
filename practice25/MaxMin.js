let arr = [12, 23, 43, 5, 4, 4, 5645, 3, 546, 65, 745, 54575];
let Max = Math.max(...arr);
let Min = Math.min(...arr);
console.log(`Max :${Max} and Min : ${Min}`);


let AscSort = arr.sort((a, b) => a - b);
console.log('Min : ', AscSort[0], " Max : ", AscSort[arr.length - 1]);



let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Min is ", min)

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Max is ", max)