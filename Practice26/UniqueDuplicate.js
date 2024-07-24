let arr = [23, 43, 45, 45, 56, 543, 785, 78, 568, 769, 986, 987, 8654, 8567, 785, 769, 769, 976, 864, 856, 795, 9876, 789, 876, 5675, 7586, 8577, 8767, 956, 6, 75867, 856, 85856, 56, 856, 57, 86, 568, 796, 809086, 768]
let UniqueSet = new Set(arr);
console.log("Unique Array is ", Array.from(UniqueSet));


let Unique = new Set();
let Duplicate = new Set();
for (let itm of arr) {
  if (Unique.has(itm)) {
    Duplicate.add(itm)
  }
  else {
    Unique.add(itm);
  }
}
let UniqueArr = Array.from(Unique);
let DuplicateArr = Array.from(Duplicate);
console.log("Unique Array is ", UniqueArr);
console.log("Duplicate Array is ", DuplicateArr)