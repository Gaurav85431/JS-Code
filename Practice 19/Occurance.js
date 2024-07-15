let arr = [2, 3, 43, 5, 54, 56, 67, 67, 5654, 34, 332, 34, 54, 56];
let occ = {};
for (let itm of arr) {
  if (occ[itm]) {
    occ[itm]++;
  }
  else {
    occ[itm] = 1;
  }
}
console.log('Occurance is ', occ);

