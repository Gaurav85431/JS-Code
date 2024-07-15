let arr = [1, 23, 34, 4, 5, 75, 435, 654, 5364, 75, 6, 45, 45, 54, 3534, 57, 8, 67, 64, 86, 56, 54];
let occur = {};
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("No. of Occurance is ", occur)