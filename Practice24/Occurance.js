let arr = [12, 23, 43, 45, 54, 76, 87, 56, 42, 21, 90];
let occur = {}
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("This occurance is ", occur)