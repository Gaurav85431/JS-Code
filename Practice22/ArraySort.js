let arr = [21, 23, 34, 45, 46, 87, 65, 75, 90, 96];
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);

console.log("Ascending sort is ", AscSort);
console.log("Descending sort is ", DscSort);


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Array in Descending Sort ", arr);


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Array in Ascending Order ", arr);
