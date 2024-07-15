let str = "hello";
let revStr = str.split('').reverse().join('');
console.log("Reverse is ", revStr)




let strAr = str.split('');
let Rev = [];
for (let i = strAr.length - 1; i >= 0; i--) {
  Rev.push(strAr[i]);
}
let RevStr = Rev.join('')
console.log("Rev is ", RevStr)


let RevSt = "";
for (let i = strAr.length - 1; i >= 0; i--) {
  RevSt = RevSt + strAr[i];
}
console.log("Reverse is ", RevSt)