let arr = [12, 23, 43, 45, 56, 67, 7, 87, 89, 90, 67, 54, 3423, 5];
let Rev = arr.slice().reverse();


let RevArrr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  RevArrr.push(arr[i]);
}
console.log("Reverse array is ", RevArrr)