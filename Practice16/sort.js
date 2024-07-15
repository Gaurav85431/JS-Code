let str = "hello gaurav";
let strAr = str.split(' ').join('').split('');

for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] > strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }

}
console.log("AScending sort is ", strAr.join(''));


let StrArr = str.split(' ').join('').split('');
for (let i = 0; i < StrArr.length; i++) {
  for (let j = 0; j < StrArr.length - i - 1; j++) {
    if (StrArr[j] < StrArr[j + 1]) {
      let temp = StrArr[j];
      StrArr[j] = StrArr[j + 1];
      StrArr[j + 1] = temp;
    }
  }
}
console.log("Descending is ", StrArr.join(''));