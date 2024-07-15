let str = "helfeh";
let strArr = str.split('');
let RevStrArr = []
for (let i = strArr.length; i > 0; i--) {
  RevStrArr.push(strArr[i - 1])
}
let RevStr = RevStrArr.join('');
if (str === RevStr) {
  console.log(" Palindrome")
}
else {
  console.log("Not palindrome")
}