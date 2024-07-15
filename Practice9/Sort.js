let arr = [32, 4, 53, 46, 4, 45, 43, 34, 46, 57, 86, 90, 534, 35, 57, 86, 4, 54, 34];
let SortArr = arr.slice().sort((a, b) => a - b);
console.log("Sort array is ", SortArr);
let DesSort = arr.slice().sort((a, b) => b - a);
console.log(" Descending sort is  ", DesSort)


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
console.log("Sorted array is Ascendig ", myArr);


let MyArr = arr.slice();
for (let i = 0; i < MyArr.length; i++) {
  for (let j = 0; j < MyArr.length - i - 1; j++) {
    if (MyArr[j] < MyArr[j + 1]) {
      let temp = MyArr[j];
      MyArr[j] = MyArr[j + 1];
      MyArr[j + 1] = temp;
    }
  }
}
console.log("Descending sort ", MyArr)