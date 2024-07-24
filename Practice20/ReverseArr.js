let arr = [13, 2, 44, 5, 4, 65, 7, 56, 45, 34];
let Rev = arr.slice().reverse();
console.log("Reverse array is ", Rev)


let RevArr = []
for (let i = arr.length - 1; i >= 0; i--) {
  RevArr.push(arr[i]);
}
console.log("Rev of Array is ", RevArr)


let RevAr = [];
for (let itm of arr) {
  RevAr.unshift(itm);
}
console.log("REv Arr is ", RevAr);