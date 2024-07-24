let arr = [23, 34, 43, 43, 434, 45, 4554, 434546, 45, 34, 34, 3, 35, 35, 4553, 5, 45, 3, 53, 3, 353, 3, 535, 553, 35]
let RevArr = arr.slice().reverse()
console.log("Reverse array is ", RevArr);


let Rev = [];
for (let itm of arr) {
  Rev.unshift(itm)
}
console.log("Rev array is ", Rev);


let RevAry = [];
for (let i = arr.length - 1; i >= 0; i--) {
  RevAry.push(arr[i]);
}
console.log("Reverse array is ", RevAry)