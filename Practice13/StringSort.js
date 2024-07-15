let str = "hellogaurav";
let strAsc = str.split('').sort().join('');
let strDsc = str.split('').sort((a, b) => b.localeCompare(a)).join('');
console.log("String in desc and Asc order ", strDsc, " and ", strAsc);



let strArr = str.split('');
for (let i = 0; i < strArr.length; i++) {
  for (let j = 0; j < strArr.length - i - 1; j++) {
    if (strArr[j] > strArr[j + 1]) {
      let temp = strArr[j];
      strArr[j] = strArr[j + 1];
      strArr[j + 1] = temp;
    }
  }
}
console.log("Asc sort is ", strArr)





let myStr = str.split('');
for (let i = 0; i < myStr.length; i++) {
  for (let j = 0; j < myStr.length - i - 1; j++) {
    if (myStr[j] < myStr[j + 1]) {
      let temp = myStr[j];
      myStr[j] = myStr[j + 1];
      myStr[j + 1] = temp;
    }
  }
}
console.log("Des sort is ", myStr)