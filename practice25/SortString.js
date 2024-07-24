let str = "hello gaurav how are you";
let strr = str.split(' ').join('').split('');
let AscSort = strr.sort().join('');
let DscSort = strr.sort((a, b) => b.localeCompare(a)).join('');
console.log("Ascending Sort ", AscSort);
console.log("Descending Sort is ", DscSort)




for (let i = 0; i < strr.length; i++) {
  for (let j = 0; j < strr.length - i - 1; j++) {
    if (strr[j] > strr[j + 1]) {
      let temp = strr[j];
      strr[j] = strr[j + 1];
      strr[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", strr)


for (let i = 0; i < strr.length; i++) {
  for (let j = 0; j < strr.length - i - 1; j++) {
    if (strr[j] < strr[j + 1]) {
      let temp = strr[j];
      strr[j] = strr[j + 1];
      strr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", strr)