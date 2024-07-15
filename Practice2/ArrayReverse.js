let arr = [12, 32, 43, 45, 54, 34, 23, 6, 564, 45, 34, 2, 1];
let reverse = arr.slice().reverse();
console.log("Reverse ", reverse);

// reverse manually
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log("reverse is ", rev)