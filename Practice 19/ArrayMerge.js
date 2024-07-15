let arr = [2, 23, 43, 5, 45, 34];
let arr2 = [23, 43, 54, 56, 67];
let Merge = [...arr, ...arr2];
console.log("Merge is ", Merge);


let MErge = arr.concat(arr2);
console.log("Merge is ", MErge)


let MergeArr = [];
for (let itm of arr) {
  MergeArr.push(itm);
}
for (let itm of arr2) {
  MergeArr.push(itm);
}
console.log("MERGE array is ", MergeArr)