let arr = [32, 34, 54, 56, 7, 34, 3, 23, 32, 1324, 6457, 45, 34, 23, 32, 35, 46, 5, 7, 5, 1, 67, 35, 46, 57, 5635, 45]
let UniqueSet = new Set(arr);
let UniqueArray = Array.from(UniqueSet);
console.log("Unique array is ", UniqueArray);



// Store duplicate in another array;

let Duplicate = new Set();
let Unique = new Set();
for (let itm of arr) {
  if (Unique.has(itm)) {
    Duplicate.add(itm)
  }
  else {
    Unique.add(itm)
  }
}
let DuplicateArr = Array.from(Duplicate);
let UniqueArr = Array.from(Unique);
console.log("Duplicate array is ", DuplicateArr);
console.log("Unique array is ", UniqueArr)