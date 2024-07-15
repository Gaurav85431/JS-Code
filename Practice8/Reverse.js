let arr = [12, 32, 35, 4, 5, 764, 534, 2321, 12, 12, 435, 567, 45];
let rev = arr.slice().reverse();
console.log("Reverse is ", rev)



let revArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i])
}
console.log("Reverse array ", revArr);