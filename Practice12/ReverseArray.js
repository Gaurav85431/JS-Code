let arr = [23, 4, 34, 5, 34, 2, 34, 5, 46, 45, 34, 6, 460, 34];
let rev = arr.slice().reverse();
console.log("Reverse is ", rev)





let RevArr = []
for (let i = arr.length - 1; i >= 0; i--) {
  RevArr.push(arr[i]);
}
console.log("Rev is ", RevArr)



