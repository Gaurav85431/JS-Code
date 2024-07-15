let arr = [12, 23, 43, 34, 2, 323, 24, 43, 23, 2, 42, 2323, 2, 12];
let uniqueObj = new Set(arr);
console.log(uniqueObj)
let UniqueArr = Array.from(uniqueObj);
console.log("Unique array is ", UniqueArr)