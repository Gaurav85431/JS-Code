let str = "hello";
let RevStr = str.split('').reverse().join('');
console.log("reverse string is ", RevStr)



let Rev = [];
let strAr = str.split('');
for (let i = str.length - 1; i >= 0; i--) {
  Rev.push(strAr[i])
}
let RevSt = Rev.join('');
console.log(RevSt)