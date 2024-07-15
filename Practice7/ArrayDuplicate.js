let arr = [12, 32, 12, 4, 43, 23, 23, 23, 13];
// find duplicate ...............   Remove Duplicate
/*   ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
let duplicate = [];
let original = [];
for (let itm of arr) {
  if (original[itm]) {
    duplicate.push(itm);
  }
  else {
    original.push(itm);

  }
}
console.log("Original and Duplicate are ", original, " - ", duplicate)*/
let duplicate = new Set();
let original = new Set();
for (let itm of arr) {
  if (original.has(itm)) {
    duplicate.add(itm)
  }
  else {
    original.add(itm)
  }
}
let darr = Array.from(duplicate);
let oArr = Array.from(original)
console.log(darr)
console.log(oArr);