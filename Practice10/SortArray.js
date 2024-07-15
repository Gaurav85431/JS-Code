let arr = [23, 42, 42, 235, 312, 34, 6, 7, 45, 2, 7, 7, 3, 2, 43, 6, 86, 3524, 43, 454, 6354342, 4];
let Sort = arr.slice().sort((a, b) => a - b);
console.log("Sort is ", Sort);


let arrr = arr.slice();
for (let i = 0; i < arrr.length; i++) {
  for (let j = 0; j < arrr.length - i - 1; j++) {
    if (arrr[j] > arrr[j + 1]) {
      let temp = arrr[j];
      arrr[j] = arrr[j + 1];
      arrr[j + 1] = temp;
    }
  }
}
console.log("Ascending is ", arrr);


let myArr = arr.slice();
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr.length - i - 1; j++) {
    if (myArr[j] < myArr[j + 1]) {
      let temp = myArr[j];
      myArr[j] = myArr[j + 1];
      myArr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", myArr)