let arr = [1, 2, 3, 4, 7, 5, 4, 3, 6, 8, 8, 5, 45, 34, 34, 4, 34, 3];
let ascSort = arr.slice().sort((a, b) => a - b);
let dscSort = arr.slice().sort((a, b) => b - a);
console.log("😊😊😊😊😊👇❌⏪🔍 ", ascSort, " --------- ", dscSort)




for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("ascending is ", arr);



let arr2 = [1, 2, 3, 4, 7, 5, 4, 3, 6, 8, 8, 5, 45, 34, 34, 4, 34, 3];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2.length - i - 1; j++) {
    if (arr2[j] < arr2[j + 1]) {
      let temp = arr2[j];
      arr2[j] = arr2[j + 1];
      arr2[j + 1] = temp
    }
  }
}
console.log("Descending sort is ", arr2)