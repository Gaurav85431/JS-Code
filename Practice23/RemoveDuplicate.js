let arr = [13, 23, 43, 54, 65, 65, 45, 43, 23, 35, 56, 5634, 23, 34]
let Uniques = new Set(arr);
let uniqueArray = Array.from(Uniques);
console.log("Unique array is ", uniqueArray)


let Unique = new Set();
let Duplicate = new Set();
for (let itm of arr) {
  if (Unique.has(itm)) {
    Duplicate.add(itm)
  }
  else {
    Unique.add(itm)
  }
}
console.log("Unique array is ", Array.from(Unique));
console.log("Duplicate array is ", Array.from(Duplicate));