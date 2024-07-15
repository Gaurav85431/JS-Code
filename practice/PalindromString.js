// Wrong way----
let str = "oko";
let strCopy = str;
let strArr = str.split('');
let reverseArr = strArr.reverse();
let output = reverseArr.join('');
if (strCopy === output) {
  console.log("Palindrome string")
}
else {
  console.log("not palindrome")
}


// correct way i.e. 1 line
let str2 = "iti";
let revStr = str2.split('').reverse().join('');
if (str2 == revStr) {
  console.log("Palindrome string")
}
else {
  console.log("not palindrome string")
}