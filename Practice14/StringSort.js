let str = "abcdefghijklmnopqrstuvwxyzopqrstuvwxyzopqrstuvwxyz";
let strAr = str.split('');
for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] > strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", strAr)
console.log("Ascending string is ", strAr.join(''));

let StrAsc = str.split('').sort().join('');
let StrDsc = str.split('').sort((a, b) => b.localeCompare(a)).join('');
console.log("Asc and Dsc is ", StrAsc, "---------------", StrDsc)



let strArr = str.split('');
for (let i = 0; i < strArr.length; i++) {
  for (let j = 0; j < strArr.length - i - 1; j++) {
    if (strArr[j] < strArr[j + 1]) {
      let temp = strArr[j];
      strArr[j] = strArr[j + 1];
      strArr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", strArr);
console.log("Descending sort is ", strArr.join(''))