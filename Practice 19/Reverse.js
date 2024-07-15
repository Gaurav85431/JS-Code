let arr = [23, 3, 34, 54, 34, 344, 45, 56, 5, 67, 89, 56, 54, 5, 67, 67, 645]
let Rev = []
for (let i = arr.length - 1; i >= 0; i--) {
  Rev.push(arr[i]);
}
console.log("REVERSE Is ", Rev)



let RevArr = []
for (let itm of arr) {
  RevArr.unshift(itm);
}
console.log("Reverse is ", RevArr)


let Reverse = arr.slice().reverse();
console.log("Reverse is ", Reverse)