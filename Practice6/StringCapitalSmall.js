// reverse
let str = "Hello";
let rev = str.split('').reverse().join('');
console.log(rev);


let arr = [];
for (let i = str.length - 1; i >= 0; i--) {
  arr.push(str[i]);
}
let arrstr = arr.join('');
console.log("Array string is ", arrstr)


// Palindrome string
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
// -
let strn = "hello";
let revstr = strn.split('').reverse().join('');
if (revstr === strn) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}


// Occurance
let myStr = "hello";
let occur = {}
for (let i = 0; i < myStr.length; i++) {
  if (occur[myStr[i]]) {
    occur[myStr[i]]++;
  }
  else {
    occur[myStr[i]] = 1;
  }
}
console.log(occur);




// Remove All Space
let strg = "hello, gaurav how are you";
let strArr = strg.split(' ');
let removeSpace = strArr.join('');
console.log(removeSpace)






// Remove Duplicate Character
let strng = "hello, gaurav how are you";
let Unique = new Set(strng);
console.log(Unique);
let UniqueArr = Array.from(Unique);
console.log(UniqueArr)