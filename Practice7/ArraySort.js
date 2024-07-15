let arr = [12, 43, 5, 34, 2, 35, 46];
let sort = arr.slice().sort((a, b) => a - b);
console.log("Sort is ", sort)
let arry = arr.slice();

for (let i = 0; i < arry.length; i++) {
  for (let j = 0; j < arry.length - i - 1; j++) {
    if (arry[j] > arr[j + 1]) {
      let temp = arry[j];
      arry[j] = arry[j + 1];
      arry[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", arry);


let myArr = [12, 43, 65, 54, 34, 232, 32, 4];
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr.length - i - 1; j++) {
    if (myArr[j] < myArr[j + 1]) {
      let temp = myArr[j];
      myArr[j] = myArr[j + 1];
      myArr[j + 1] = temp;
    }
  }
}
console.log("Descending", myArr)