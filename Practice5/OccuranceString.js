let str = "okgauravhwoareyourhellobyechai";

// Occurance
let strArr = str.split('');
let occur = {};
for (let itm of strArr) {
  if (occur[itm]) {
    occur[itm] += 1;
  }
  else {
    occur[itm] = 1;
  }
}
console.log(occur)


// Duplicate
let Unique = new Set();
let Duplicate = new Set();
for (let i = 0; i < str.length; i++) {
  if (Unique.has(str[i])) {
    Duplicate.add(str[i])
  }
  else {
    Unique.add(str[i])
  }
}
let uniqueArr = Array.from(Unique);
let duplicateArr = Array.from(Duplicate);
console.log("unique and duplicate is ", uniqueArr, " and ", duplicateArr)