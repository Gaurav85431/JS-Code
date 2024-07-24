let str = "hello gaurav how are you gyz";
let AscSort = str.split('').join('').split('').sort().join('');
let DscSort = str.split('').join('').split('').sort((a, b) => b.localeCompare(a)).join('');
console.log("Ascending ", AscSort);
console.log("Descending ", DscSort)


let strAr = str.split('').join('').split('');
for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] > strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", strAr.join(''))




for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] < strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", strAr.join(''))