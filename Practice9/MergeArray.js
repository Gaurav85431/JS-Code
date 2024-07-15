let arr = [23, 5, 46, 7, 5, 5, 67, 3, 46];
let arr2 = [4, 6, 5, 3, 4, 7, 35, 64, 3, 3564];
let MergeArr = arr.concat(arr2);
console.log("Merge array is ", MergeArr)


// let Merge = arr.push(arr2); ❌
// console.log("Merge in 1 ", Merge)❌

// Spread Operator:-
let Merge = [...arr, ...arr2];
console.log("Merge array is 2nd way ", Merge)