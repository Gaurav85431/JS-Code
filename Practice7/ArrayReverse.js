let arr = [12, 43, 54, 64, 54, 34, 4];
let RevArr = arr.slice().reverse();
console.log(RevArr)


let Rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  Rev.push(arr[i])
}
console.log(Rev)