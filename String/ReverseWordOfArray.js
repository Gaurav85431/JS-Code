// Word Reverse
let str = "How are you guyz";
let strAr = str.split(' ').reverse().join(' ');
console.log("WORD Reverse ", strAr)


// Char Rev
let strCharAr = str.split(' ').join('').split('').reverse().join('');
console.log("char reverse ", strCharAr)


// char reverse
let Rev = [];
let strArr = str.split(' ').join('').split('');
for (let i = strArr.length - 1; i >= 0; i--) {
  Rev.push(strArr[i]);
}
let RevStr = Rev.join('');
console.log("Reverse all char of string is ", RevStr);


// WOrd  Reverse
let RevWord = [];
let strArrr = str.split(' ');
for (let i = strArrr.length - 1; i >= 0; i--) {
  RevWord.push(strArrr[i]);
}
let RevWOrdString = RevWord.join(' ');
console.log("Reverse WOrd of array, ", RevWOrdString)