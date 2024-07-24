let arr = [12, 34, 5, 46, 56, 56, 67, 67, 76, 56]
let f = -Infinity, s = -Infinity, t = -Infinity;
for (let itm of arr) {
  if (itm > f) {
    t = s;
    s = f;
    f = itm;
  }
  else if (itm > s && itm < f) {
    t = s;
    s = itm;
  }
  else if (itm > t && itm < s) {
    t = itm;
  }

}
console.log("-- ", f, " -- ", s, "--", t);

// 2nd way-- By Using Sort() and Remove Duplicate element; (own)
let AscSort = arr.slice().sort((a, b) => a - b);
let AscSet = new Set(AscSort);
let AscUnique = Array.from(AscSet);
// console.log("Ascending Sort is ",AscUnique);
console.log("3rd largest no is ", AscUnique[2]);
