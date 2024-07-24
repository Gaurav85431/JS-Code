let arr = [12, 32, 43, 54, 78, 655, 7, 76, 43];
console.log("Last element is ", arr[arr.length - 1]);
arr.pop();
console.log(`Last element deleted ${arr}`)



// splice()method
let arrr = arr.slice();
console.log('Last element ', arrr[arrr.length - 1]);
arrr.splice(arrr.length - 1, 1);
console.log('After Last Element Deleted ', arrr);


// by delete keyword
console.log("5th element delete ", delete arrr[5 - 1])


// First Element delete
let ar = [12, 23, 43, 45, 56, 78, 89, 90];
for (let i = 0; i < ar.length; i++) {
  ar[i] = ar[i + 1]
}
console.log("Removed Last Element ", ar)
ar.pop()
console.log("---- ", ar)

// Last Element delete
let ary = [32, 43, 432, 23, 12, 231, 843, 3894, 347];
for (let i = ary.length - 1; i >= 0; i--) {
  ary[i] = ary[i - 1]
}
console.log("Removed First Element ", ary)
ary.shift();
console.log("--- ", ary)