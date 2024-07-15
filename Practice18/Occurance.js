let arr = [32, 4, 35, 4, 6, 46, 64, 4646, 53];
let occ = {};
for (let itm of arr) {
  if (occ[itm]) {
    occ[itm]++
  }
  else {
    occ[itm] = 1;
  }
}
console.log("OCcurance is ", occ)


let oc = {}
for (let i = 0; i < arr.length; i++) {
  if (oc[arr[i]]) {
    oc[arr[i]]++
  }
  else {
    oc[arr[i]] = 1;
  }
}
console.log("occurance is ", oc)