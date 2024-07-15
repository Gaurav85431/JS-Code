let arr = [12, 32, 45, 54, 34, 65, 68, 795, 4, 53, 23, 43];
let Sorted = arr.slice().sort((a, b) => a - b);
console.log(Sorted);


let myArr = [];
let arry = arr.slice();
for (let i = 0; i < arry.length; i++) {
  for (let j = 0; j < arry.length - i - 1; j++) {
    if (arry[j] > arry[j + 1]) {
      let temp = arry[j];
      arry[j] = arry[j + 1];
      arry[j + 1] = temp;
    }
  }
}
console.log("Array sorted Ascending", arry);


let arry2 = arr.slice();
for (let i = 0; i < arry2.length; i++) {
  for (let j = 0; j < arry2.length - i - 1; j++) {
    if (arry2[j] < arry2[j + 1]) {
      let temp = arry2[j];
      arry2[j] = arry2[j + 1];
      arry2[j + 1] = temp;
    }
  }
}
console.log("Array Sort Descending ", arry2);