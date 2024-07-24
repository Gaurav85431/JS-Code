let arr = [23, 32, 34, 45, 56, 7, 67, 66, 9, 543, 423, 32, 34, 3, 8954, 3535, 53, 3, 34, 34, 53, 35, 35, 5];


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Ascending Sort is ", arr);


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Descending Sort is ", arr)




let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
console.log("Ascending and Descending sort is", AscSort, " ------- ", DscSort)