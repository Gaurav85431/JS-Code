let arr = [12, 43, 5, 54, 34, 43, 646, 786, 56, 46, 54, 68, 78, 76, 90, 87];

// slice() - 1
let arr1 = arr.slice(0, 6);
let arr2 = arr.slice(6);
let merge = [...arr1, ...arr2];
console.log("Merge array ", merge);
let merge2 = arr1.concat(arr2);
console.log("Merge array is ", merge2)




// slice() - 2
let index = [2, 4, 5, 1, 6, 8];
let val = index.map((itm) => arr[itm]);
console.log(val)

// // slice() - 3
let slice = []
for (let i = 0; i < 5; i++) {
  slice.push(arr[i])
}
console.log(slice)