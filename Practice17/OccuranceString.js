let str = "hello gaurav how are you";
let strAr = str.split(' ').join('').split('');
let occur = {};
for (let itm of strAr) {
  if (occur[itm]) {
    occur[itm]++
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Occurance string is ", occur);



let occ = {};
for (let i = 0; i < strAr.length; i++) {
  let itm = strAr[i];
  if (occ[itm]) {
    occ[itm]++;
  }
  else {
    occ[itm] = 1;
  }
}
console.log("Occurance is ", occ)