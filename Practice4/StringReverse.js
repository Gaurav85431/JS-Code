let str = "hello";
let RevStr = str.split('').reverse().join('');
console.log("Rev string is ", RevStr)


// 
let StrArray = str.split('');
let RevArray = []
for (let i = StrArray.length - 1; i >= 0; i--) {

  RevArray.push(StrArray[i])
}
let RevString = RevArray.join('');
console.log("Reverse string is ", RevString)