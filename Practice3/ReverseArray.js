let arr = [12, 3, 54, 46, 34, 4, 45, 46, 45];
let Rev = arr.slice().reverse();
console.log(Rev)


let Rev2 = [];
for (let i = arr.length; i > 0; i--) {

  Rev2.push(arr[i - 1])
}
console.log("Rev is ", Rev2)