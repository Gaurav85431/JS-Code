let str = "goog";
let rev = str.split('').reverse().join('');
if (rev === str) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}



let Rev = [];
for (let i = str.length - 1; i >= 0; i--) {
  Rev.push(str[i])
}
let Revstr = Rev.join('')
if (str === Revstr) {
  console.log("Palindrome")
}
else {
  console.log("Not palindrome")
}