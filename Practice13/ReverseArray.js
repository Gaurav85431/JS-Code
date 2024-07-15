let arr = [23, 23, 34, 53, 4, 23, 463, 36, 3489, 344346, 56, 3, 643, 5, 34, 34, 5];
let Rev = arr.slice().reverse();

console.log("REv is ", Rev)

let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log("Reverse is ", rev)


