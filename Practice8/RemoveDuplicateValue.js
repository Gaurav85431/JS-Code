let arr = [12, 23, 34, 23, 132, 12, 23, 34, 5, 67, 6, 5654, 3, 434, 34, 67, 97];
let x = new Set(arr);
console.log("Removed Duplicate value in set ", x);
let UniqueArray = Array.from(x);
console.log("Original array is ", UniqueArray)




let duplicate = new Set();
let unique = new Set();
for (let i = 0; i < arr.length; i++) {
  if (unique.has(arr[i])) {
    duplicate.add(arr[i]);
  }
  else {
    unique.add(arr[i]);
  }
}
console.log("Unique and Duplicate  value is ", unique, "  and ", duplicate)


