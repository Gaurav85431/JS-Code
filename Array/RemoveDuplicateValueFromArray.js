let arr = [2, 12, 23, 43, 32, 23, 23, 1, 2, 32, 12, 24, 3, 55, 4, 35, 3, 434];
let UniqueValue = new Set(arr)      // set contain unique value; and return object.
console.log("Unique  value in object    ", UniqueValue)

let UniqueArray = Array.from(UniqueValue);
console.log("Unique array or  Duplicate Value Removed is ", UniqueArray);