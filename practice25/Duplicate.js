// remove dupliate, occurance, duplicate aur original ko alag arry me rakho 

let arr = [3232, 34, 35, 345, 43, 54, 54, 354, 345, 43, 64, 46, 64, 534, 453];
let occur = {};
for (let itm of arr) {
  if (occur[itm]) {
    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log("Ocuuracne is ", occur);


// 
let Unique = new Set();
let dupliate = new Set();
for (let itm of arr) {
  if (Unique.has(itm)) {
    dupliate.add(itm);
  }
  else {
    Unique.add(itm);
  }
}
console.log("unique array is ", Array.from(Unique));
console.log("Duplicate array is ", Array.from(dupliate));


// 
let RemoveDuplicate = new Set(arr);
console.log("remove duplicate is ", Array.from(RemoveDuplicate));