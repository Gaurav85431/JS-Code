let arr = [23, 34, 4, 54, 545, 656, 7, 76, 56, 45, 345, 4, 34, 12, 4565, 67, 87, 78, 78, 75, 46, 53, 43, 32, 1, 12, 12, 23, 34, 54, 64, 76, 68, 87, 76, 645, 35, 34, 34, 35, 46, 67, 34, 687, 79, 678, 76, 56, 46, 46, 46]
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);

console.log("Ascending Sort ", AscSort);
console.log("Descending Sort ", DscSort);


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log('Asceinding sort is ', arr)


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