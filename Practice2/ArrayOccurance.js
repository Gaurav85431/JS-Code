let arr = [2, 4, 54, 34, 3, 2, 54, 65, 54, 65, 5, 34, 34, 34, 34, 343, 34];
let occurance = {};
for (let i = 0; i < arr.length - 1; i++) {
  let val = arr[i];
  if (occurance[val]) {
    occurance[val] = occurance[val] + 1
  }
  else {
    occurance[val] = 1;
  }
}
console.log("Occurance  is  ", occurance)

// for-of
let occur = {}
for (let i of arr) {
  if (occur[i]) {
    occur[i]++;
  }
  else {
    occur[i] = 1;
  }
}
console.log("Occurance is ", occur);



// forEach---
let occur2 = {};
arr.forEach((itm) => {
  if (occur2[itm]) {
    occur2[itm] + 1
  }
  else {
    occur2[itm] = 1
  }
})
console.log(`OCcurance  is ----------     ${occur2}`)