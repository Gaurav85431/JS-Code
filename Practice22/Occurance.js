let arr = [12, 23, 43, 54, 65, 76, 89, 56, 43, 24];
let occur = {};
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance is ", occur)