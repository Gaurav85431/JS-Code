// aia 

let str = "aboa";
let rev = str.split('').reverse().join('');
if (str === rev) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrom")
}



// 
let val = "abf";
let store = val;
let strr = val.split('');
let pal = [];
for (let i = strr.length - 1; i >= 0; i--) {
  pal.push(strr[i]);
}
let PalindromeStr = pal.join('');
if (store === PalindromeStr) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}