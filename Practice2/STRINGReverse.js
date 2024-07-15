// 1st way
let str2 = "helloe";
let revStr = str2.split('').reverse().join('')
console.log("Reverse string is ", revStr)

// 2nd way
let str = "hello";
let strArr = str.split('');
let revString = [];
for (let i = strArr.length - 1; i >= 0; i--) {
  revString.push(strArr[i]);
}
let RevStr = revString.join('');
console.log("Rev string ", RevStr);