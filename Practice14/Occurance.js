let occur = {};
let str = "hellogauravhowareyou";
let strArr = str.split('');
for (let char of str) {
  if (occur[char]) {
    occur[char]++
  }
  else {
    occur[char] = 1;
  }
}
console.log("Occurance is ", occur)


let occ = {}
for (let i = 0; i < str.length; i++) {
  let itm = str[i];
  if (occ[itm]) {
    occ[itm]++
  }
  else {
    occ[itm] = 1;
  }
}
console.log("OCcurance is ", occ)