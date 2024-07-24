let arr = [21, 32, 34, 54, 54, 56, 67, 87, 6, 556];
let Rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  Rev.push(arr[i])
}
console.log("reverse array is ", Rev);



for (let i = arr.length - 1; i >= 0; i--) {
  console.log(" ", arr[i])
}

let RevArr = arr.reverse();
console.log("Reverse array is ", RevArr)


let RevArrr = []
for (let i = 0; i < arr.length; i++) {
  RevArrr.unshift(arr[i])
}
console.log("Reverse array is ", RevArrr)