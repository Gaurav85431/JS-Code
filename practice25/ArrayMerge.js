let arr = [11, 32, 43, 45, 6567, 56, 534, 56, 67];
let arr2 = [23, 43, 456, 56, 67, 877878, 78, 67];
let Merge = [...arr, ...arr2];
let Merge2 = arr.concat(arr2);
console.log("Merge Array is ", Merge);
console.log("Merge Array 2 is ", Merge2)



let Merge3 = [];
for (let itm of arr) {
  Merge3.push(itm);
}
for (let itm of arr2) {
  Merge3.push(itm);
}
console.log("Merge array 3 is ", Merge3)