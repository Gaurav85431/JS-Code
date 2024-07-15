const arr = [12, 32, 43, 23, 42, 13];
const arr2 = [31, 32, 43, 5465, 67, 85];
console.log("Merge array ", arr.concat(arr2))


// by spread operator
const newArr = [...arr, ...arr2];
console.log("merge array by spread operator  ", newArr)




//  Array ko merge karte hai to duplicate value remove nhi hota hai

// 1 array bana lenge aur usme arr, arr2 ka data ko push kr denge
let MergeArr = [];
for (let itm of arr) {
  MergeArr.push(itm);
}
for (let itm of arr2) {
  MergeArr.push(itm);
}
console.log("MERGE array is ", MergeArr)