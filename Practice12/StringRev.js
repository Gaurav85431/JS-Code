let str = "hello";
let rev = str.split('').reverse().join('');
console.log("rev is  ", rev);





let StrArr = str.split('')
let revArr = []
for (let i = StrArr.length - 1; i >= 0; i--) {
  revArr.push(StrArr[i]);
}
let revStr = revArr.join('');
console.log("rev is ", revStr)