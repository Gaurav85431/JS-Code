let arr = [12, 32, 43, 54, 34, 3, 43, 23, 12, 34];
let Duplicate = new Set();
let Unique = new Set();
for (let itm of arr) {
  if (Unique.has(itm)) {
    Duplicate.add(itm);
  }
  else {
    Unique.add(itm);
  }
}
console.log("Duplicate is ", Duplicate);
console.log("Duplicate array is  ", Array.from(Duplicate));