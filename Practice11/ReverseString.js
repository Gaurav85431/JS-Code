let str = "hello";
let res = str.split('').reverse().join('');
console.log("Reverse string is ", res)



let out = [];
let strArr = str.split('');
for (let i = strArr.length - 1; i >= 0; i--) {
  out.push(strArr[i])
}
let result = out.join('');
console.log("Reverse is ", result)