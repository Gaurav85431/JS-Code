let arr = [23, 24, 42, 5, 3948, 46, 6, 7, 7, 6, 93, 5, 45, 46, 64, 4, 34, 34, 34];

let duplicate = new Set();
let unique = new Set();
for (let itm of arr) {
  if (unique.has(itm)) {
    duplicate.add(itm);
  }
  else {
    unique.add(itm);
  }
}
let dArr = Array.from(duplicate);
console.log("Duplicate is ", dArr)




let UniqueElement = new Set(arr);
let UniqueElementArray = Array.from(UniqueElement)
console.log("Unique array is ", UniqueElementArray)