let str = "hello";
let strr = str.split('');
let RevArr = []
for (let i = strr.length; i > 0; i--) {
  RevArr.push(strr[i - 1])
}
let RevStr = RevArr.join('')
console.log(RevStr)


let strRev = str.split('').reverse().join('');
console.log(strRev)