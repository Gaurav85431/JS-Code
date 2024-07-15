let arr = [12, 32, 43, 54, 65, 76, 87, 5, 4, 534, 23, 12];
let removeDuplicate = new Set(arr);
let removeDuplicateArray = Array.from(removeDuplicate);
console.log(removeDuplicateArray)



// 2nd way
let duplicate = new Set();
let UniqueSet = new Set();

for (let itm of arr) {
  if (UniqueSet.has(itm)) {
    duplicate.add(itm);
  }
  else {
    UniqueSet.add(itm);
  }
}
console.log("Duplicate set ", duplicate);
console.log("Unique Set is ", UniqueSet);