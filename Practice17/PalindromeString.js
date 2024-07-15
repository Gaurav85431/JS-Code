let str = "hellolleh";
let strRev = str.split('').reverse().join('');
if (str === strRev) {
  console.log("Palindrome  ", str)
}
else {
  console.log("Not Palindrom", str)
}