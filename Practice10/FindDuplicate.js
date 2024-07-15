let arr = [23, 24, 2, 32, 1, 3, 4, 4, 24, 903, 24, 24, 24, 24, 43, 45, 6];
let myUniqueSet = new Set(arr);
console.log("My unique array is ", Array.from(myUniqueSet));




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
console.log("Duplicate array is ", Array.from(Duplicate));
console.log("Unique array is ", Array.from(Unique))