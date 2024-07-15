let arr = [12, 23, 43, 54, 65, 76, 8, 78, 79];
let RevArr = arr.slice().reverse();
console.log("ReVerse arrays ", RevArr)


let Rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  Rev.push(arr[i]);
}
console.log("REv array ", Rev)


let REVARR = []
for (let itm of arr) {

  REVARR.unshift(itm);
}
console.log("REv array is ", REVARR)