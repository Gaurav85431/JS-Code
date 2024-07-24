let arr = [23, 43, 54, 56, 76, 88];
let Asc = arr.slice().sort((a, b) => a - b);
let Dsc = arr.slice().sort((a, b) => b - a);
console.log("Ascending Sort is ", Asc);
console.log("Descending Sort is ", Dsc);


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Asc Sort is ", arr);



for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Des Sort is ", arr)


