let arr = [2, 12, 23, 43, 32, 23, 23, 1, 2, 32, 12, 24, 3, 55, 4, 35, 3, 434];
let occur = {};
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance is ", occur)





let occ = {}
arr.forEach((itm) => {
  if (occ[itm]) {
    occ[itm]++;
  }
  else {
    occ[itm] = 1;
  }
})
console.log("occurance is ", occ)


