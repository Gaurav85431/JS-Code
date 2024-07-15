let str = "hello";
let rev = str.split('').reverse().join('');
console.log("Reverse of string is ", rev);


// Manually,
let revArr = [];
let StrArr = str.split('');
for (let i = StrArr.length; i > 0; i--) {
  revArr.push(StrArr[i - 1])
}
console.log("Reverse of Array is ", revArr);
let RevStr = revArr.join('');
console.log("Reverse string is ", RevStr)