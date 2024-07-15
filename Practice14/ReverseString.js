let str = "hello";
let Rev = str.split('').reverse().join('');
console.log("Reverse is ", Rev)



let Reverse = []
let StrAr = str.split('');
for (let i = StrAr.length - 1; i >= 0; i--) {
  Reverse.push(StrAr[i])
}
let RevStr = Reverse.join('');
console.log("Reverse is ", RevStr)