let str = "wow";
let store = str;
let revstr = str.split('').reverse().join('');
if (str === revstr) {
  console.log("Palindrome")
}
else {
  console.log("not palindrome")
}



let revStr = [];
let strarr = str.split('');
for (let i = strarr.length - 1; i >= 0; i--) {
  revStr.push(strarr[i])
}
let revStrStr = revStr.join('');
if (revStrStr === str) {
  console.log("Palindrome")
}
else {
  console.log("Not palindrome")
}