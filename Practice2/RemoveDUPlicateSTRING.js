let str = "hellogaurav";
let strArr = str.split('');
let UniqueSet = new Set(strArr);
let UniqueArr = Array.from(UniqueSet);
console.log("unique array is ", UniqueArr)
console.log('unique string is ', UniqueArr.join(''))