let str = "hello";
let RevStr = str.split('').reverse().join('');
console.log("Reverse is ", RevStr)


let strAr = str.split('');
let Rev = []
for (let i = strAr.length - 1; i >= 0; i--) {
  Rev.push(strAr[i]);
}
console.log('REverse string is ', Rev.join(''))



let Res = '';
for (let i = strAr.length - 1; i >= 0; i--) {
  Res = Res + strAr[i]
}
console.log("Reverse String is ", Res)


