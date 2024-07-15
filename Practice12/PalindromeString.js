let string = "hellolleh";
let RevStr = string.split('').reverse().join('');
if (string === RevStr) {
  console.log("Palindrome")
}
else {
  console.log("Not palindrome")
}



// Manually
let StrArr = string.split('');
let RevArr = [];
for (let i = StrArr.length - 1; i >= 0; i--) {
  RevArr.push(StrArr[i])
}
let RevString = RevArr.join('');
if (string === RevString) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}