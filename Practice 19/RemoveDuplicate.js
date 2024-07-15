let arr = [32, 43, 54, 6, 74, 554, 34, 34, 5, 46, 56, 54, 34, 3, 56, 57];
let Unique = new Set(arr);
let UniqueArray = Array.from(Unique);
console.log("Unique array is ", UniqueArray)




let UniqueSet = new Set();
let duplicateSet = new Set();
for (let itm of arr) {
  if (UniqueSet.has(itm)) {
    duplicateSet.add(itm);
  }
  else {
    UniqueSet.add(itm)
  }
}
console.log("Unique array is ", Array.from(UniqueSet))