let arr = [12, 2, 35, 34, 23, 5, 56, 6, 6797, 608, 745, 6];
let Rev = arr.slice().reverse();
console.log("Reverse is ", Rev);



let RevArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  RevArr.push(arr[i]);
}
console.log("Rev is ", RevArr)



// Reverse
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i])
}