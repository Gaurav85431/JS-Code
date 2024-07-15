let arr = [12, 34, 45, 5, 54, 34, 23, 57, 2, 4, 5, 35, 34, 34, 67];
let occur = {};
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance  is ", occur)
