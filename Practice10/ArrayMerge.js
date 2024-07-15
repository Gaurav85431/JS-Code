let arr = [12, 24, 34, 35, 64, 86];
let arr2 = [32, 43, 64, 67, 9809, 78];
let Merge = arr.concat(arr2);

let Merging = [...arr, ...arr2];
console.log("Merge array is ", Merge);
console.log("Merging array is ", Merging)

//  Array ko merge karte hai to duplicate value remove nhi hota hai