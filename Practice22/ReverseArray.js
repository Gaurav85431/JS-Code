let arr = [12, 3, 34, 35, 42, 45, 65, 76, 56, 45, 7, 66, 65, 7, 56, 67];
let Rev = arr.slice().reverse();
console.log("Reverse is ", Rev)


let RevArr = [];
for (let i = 0; i < arr.length; i++) {
  RevArr.unshift(arr[i]);
}
console.log("Reverse Array is ", RevArr);


let RevAr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  RevAr.push(i);
}
console.log("Reverse array is ", RevAr)