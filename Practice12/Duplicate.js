let arr = [1, 2, 3, 4, 5, 6, 7, 5, 4, 4, 2, 54, 4, 5, 63, 43, 4, 3, 5];
let d = new Set();
let u = new Set();

for (let itm of arr) {
  if (u.has(itm)) {
    d.add(itm)
  }
  else {
    u.add(itm)
  }
}
dAr = Array.from(d);
uAr = Array.from(u);
console.log("Unique and Duplicate array is ", uAr, " and ", dAr)