let arr = [12, 23, 43, 54, 56, 67, 78, 89, 12, 23, 43, 53, 90];
let unique = new Set(arr);
let ArrayUnique = Array.from(unique);
console.log("Unique Array is ", ArrayUnique);


let Duplicate = [];
let Unique = [];
for (let itm of arr) {
  if (Unique.includes(itm)) {
    Duplicate.push(itm)
  }
  else {
    Unique.push(itm)
  }
}


let DupliSet = new Set();
let UniqSet = new Set();
for (let itm of arr) {
  if (UniqSet.has(itm)) {
    DupliSet.add(itm);
  }
  else {
    UniqSet.add(itm)
  }
}
console.log("Unique Set is ", UniqSet);
console.log("Duplicate Set is ", DupliSet)
let UniqueSetArray = Array.from(UniqSet)
let DuplicateSetArray = Array.from(DupliSet);
console.log("Unique Array is ", UniqueSetArray);
console.log("Duplicate Array is ", DuplicateSetArray)