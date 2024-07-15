let arr = [12, 432, 34, 54, 34, 32, 3232, 34, 5, 354, 4, 54, 34];
let Asc = arr.slice().sort((a, b) => a - b);
let Dsc = arr.slice().sort((a, b) => b - a);

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
console.log("Descending Sort is ", arr);