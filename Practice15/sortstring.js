let str = "hello Garuav howareyou";
let AscSort = str.split(' ').join('').split('').sort().join('');
let DscSort = str.split(' ').join('').split('').sort((a, b) => b.localeCompare(a))
console.log("Asc sort is ", AscSort)
console.log("Dsc sort is ", DscSort.join(''))


let strArr = str.split(' ').join('').split('')

for (let i = 0; i < strArr.length; i++) {
  for (let j = 0; j < strArr.length - i - 1; j++) {
    if (strArr[j] > strArr[j + 1]) {
      let temp = strArr[j];
      strArr[j] = strArr[j + 1];
      strArr[j + 1] = temp
    }
  }
}
console.log("Asc sort array is ", strArr);
console.log("Asc sort ", strArr.join(''))


let strAr = str.split(' ').join('').split('')
for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] < strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
let Dsc = strAr.join('');
console.log("Descending ", Dsc)