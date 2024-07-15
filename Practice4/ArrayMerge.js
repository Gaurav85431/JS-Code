let arr1 = [3, 32, 43, 32, 3, 42, 23, 2];
let arr2 = [43, 65, 45, 34, 23, 54, 342];
let Merge = [...arr1, ...arr2];
console.log("MERGE by Spread ", Merge);


let Merging = arr1.concat(arr2);
console.log("Merging by concat ", Merging);