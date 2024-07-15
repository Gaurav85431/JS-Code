let ar1 = [23, 43, 45, 563, 34];
let ar2 = [32, 54, 7587, 56, 45, 23];
let mergeArray = [...ar1, ...ar2]   // duplicate will not remove

let mergeArray2 = ar1.concat(ar2);  // duplicate will not remove

console.log("Merage array ", mergeArray, " 2nd    ", mergeArray2)