let arr = [12, 43, 32, 35, 64, 54, 34, 46, 57, 8, 98, 78, 67, 65, 35];
let Rev = arr.slice().reverse();
console.log("Rev is ", Rev)



let RevArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  RevArr.push(arr[i]);
}
console.log("Rev array is ", RevArr)