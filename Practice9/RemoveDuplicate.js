let arr = [3, 4, 53, 2, 5, 2, 36, 3, 63, 63, 5, 356, 47, 5, 46, 7, 75, 46, 7, 5, 46, 5, 6, 4, 64, 4, 464, 664, 5, 7];
let Unique = new Set(arr);
console.log("Remove duplicate ", Unique);
let UniqueArray = Array.from(Unique);
console.log("Remove Duplicate array is ", UniqueArray)