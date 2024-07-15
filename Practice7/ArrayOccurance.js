let arr = [23, 123, 13, 42, 35, 546, 6, 56, 5, 57, 57, 5, 56, 6];
let occur = {};
// let dup = {};❌
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++
  }
  else {
    occur[itm] = 1;
  }
}
console.log(occur)