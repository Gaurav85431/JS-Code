let arr = [23, 4, 45, 65, 2, 35, 24, 2];
let RemoveDuplicate = new Set(arr);
let RemoveDuplicateArray = Array.from(RemoveDuplicate);
console.log("Remove Duplicate obj ", RemoveDuplicate);
console.log("remove duplicate array is  ", RemoveDuplicateArray)




let UniqueArray = new Set();
let DuplicateArray = new Set();
for (let itm of arr) {
  if (UniqueArray.has) {
    DuplicateArray.add(itm);
  }
  else {
    UniqueArray.add(itm)
  }
}
let UniqueArr = Array.from(UniqueArray);
let DuplicateArr = Array.from(DuplicateArray);
console.log("Unique and Duplicate array is ", UniqueArr, DuplicateArr)