let arr = [12, 23, 43, 54, 65, 76, 43, 54, 65, 76, 43, 54, 65, 76, 87, 89];
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


// duplicate aur unique ko alag alag array me rakhna hai
let Dup = [];
let Unq = [];
for (let itm of arr) {
  if (Unq.includes(itm)) {
    Dup.push(itm)
  }
  else {
    Unq.push(itm);
  }
}
console.log("Duplicate array is ", Dup, " and unique array is ", Unq)


// Duplicate me agar 1 item multiple time hai to usko 1 hi bar lenge i.e. multiple time nhi aana chahiye;
let D = [];
let U = [];
for (let itm of arr) {
  if (U.includes(itm)) {
    D.push(itm);
  }
  else {
    U.push(itm);
  }
}
let DUnique = new Set(D);
let DArr = Array.from(DUnique);
console.log("Duplicate Removed ", DArr)