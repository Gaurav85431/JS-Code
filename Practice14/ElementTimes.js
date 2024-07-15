let arr = [21, 32, 43, 534, 23, 3223, 23, 23, 32]
let val = 23;
let count = 0;
for (let itm of arr) {
  if (val === itm) {
    count++;
  }
}
console.log(`${val} : ${count} bar aaya`)



let c = {};
for (let itm of arr) {
  if (c[itm]) {
    c[itm]++
  }
  else {
    c[itm] = 1;
  }
}
console.log(c)
let vl = 23;
console.log("val - ", c[vl])