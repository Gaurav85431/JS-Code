let arr = [12, 23, 4, 34, 54, 8, 45, 6, 65, 45, 34, 32, 54, 45, 34];
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


