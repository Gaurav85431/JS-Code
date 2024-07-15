let str = "HiH";
let res = str;
let strRev = str.split('').reverse().join('')
if (res == strRev) {
  console.log("Palindrom string")
}
else {
  console.log("Not Palindrome String")
}