let str = "hellogaurav how areyou"
let strs = str.split(' ').join('');
let strsAr = strs.split('');
for (let i = 0; i < strsAr.length; i++) {
  for (let j = 0; j < strsAr.length - i - 1; j++) {
    if (strsAr[j] > strsAr[j + 1]) {
      let temp = strsAr[j];
      strsAr[j] = strsAr[j + 1];
      strsAr[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", strsAr)




for (let i = 0; i < strsAr.length; i++) {
  for (let j = 0; j < strsAr.length - i - 1; j++) {
    if (strsAr[j] < strsAr[j + 1]) {
      let temp = strsAr[j];
      strsAr[j] = strsAr[j + 1];
      strsAr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", strsAr)

let strsArr = strs.split('')
for (let i = 0; i < strsArr.length; i++) {
  for (let j = 0; j < strsArr.length - i - 1; j++) {
    if (strsArr[j] < strsArr[j + 1]) {
      let temp = strsArr[j];
      strsArr[j] = strsArr[j + 1];
      strsArr[j + 1] = temp;
    }
  }
}
console.log("Descending sort is ", strsArr)