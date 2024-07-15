let arr = [21, 3, 243, 54, 56, 34, 35, 6, 6, 778, 9, 6, 857, 56, 54, 3, 34, 54, 6, 457, 46];
let Asc = arr.slice().sort((a, b) => a - b);
let Dsc = arr.slice().sort((a, b) => b - a);
console.log("Asc and Dsc is ", Asc, "  ", Dsc)




for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {   // 1,2,3   
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Asc is ", arr)


let arrr = [21, 3, 243, 54, 56, 34, 35, 6, 6, 778, 9, 6, 857, 56, 54, 3, 34, 54, 6, 457, 46];
for (let i = 0; i < arrr.length; i++) {
  for (let j = 0; j < arrr.length - i - 1; j++) {
    if (arrr[j] < arrr[j + 1]) {
      let temp = arrr[j];
      arrr[j] = arrr[j + 1];
      arrr[j + 1] = temp;
    }
  }
}
console.log("Descending is ", arrr)