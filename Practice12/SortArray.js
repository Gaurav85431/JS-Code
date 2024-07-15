let arr = [23, 23, 34, 45, 5, 32, 57, 68, 552, 65, 54, 34, 4, 2, 57, 878, 85, 57, 564, 3, 79, 46, 68, 56];
let myArr = arr.slice();
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr.length - i - 1; j++) {
    if (myArr[j] > myArr[j + 1]) {
      let temp = myArr[j];
      myArr[j] = myArr[j + 1];
      myArr[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", myArr)


let myArrr = arr.slice();
for (let i = 0; i < myArrr.length; i++) {
  for (let j = 0; j < myArrr.length - i - 1; j++) {
    if (myArrr[j] < myArrr[j + 1]) {
      let temp = myArrr[j];
      myArrr[j] = myArrr[j + 1];
      myArrr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", myArrr)




let Asc = arr.slice().sort((a, b) => a - b);
let Dsc = arr.slice().sort((a, b) => b - a);
console.log("Asc and Dsc Sort is ", Asc, " ", Dsc)