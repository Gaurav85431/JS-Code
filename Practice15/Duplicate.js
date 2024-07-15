let arr = [1, 2, 3, 4, 5, 6, 7, 5, 4, 4, 2, 54, 4, 5, 63, 43, 4, 3, 5];
let u = new Set();
let d = new Set();
for (let itm of arr) {
  if (u.has(itm)) {
    d.add(itm)
  }
  else {
    u.add(itm)
  }
}
console.log("U and D ", u, " -- ", d)