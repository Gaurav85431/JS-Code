let arr = [12, 12, 13, 15, 16, 17, 18, 24, 25, 36, 46, 57];
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
console.log("Asc sort is     ", AscSort);
console.log("Dsc sort is     ", DscSort)


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
      arr[j] = arr[j + 1]
      arr[j + 1] = temp;
    }
  }
}
console.log("Descending Sort is ", arr)