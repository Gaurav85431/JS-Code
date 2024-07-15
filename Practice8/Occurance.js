let arr = [23, 4, 3, 54, 56, 434, 3, 2, 23, 3, 3554, 35, 43, 2];
let occurs = {};
for (let i = 0; i < arr.length; i++) {
  if (occurs[arr[i]]) {
    occurs[arr[i]]++;
  }
  else {
    occurs[arr[i]] = 1;
  }
}
console.log("Occurance is ", occurs)




let occ = {};
for (let itm of arr) {
  if (occ[itm]) {
    occ[itm]++;
  }
  else {
    occ[itm] = 1;
  }
}
console.log("Occurance is ", occ)