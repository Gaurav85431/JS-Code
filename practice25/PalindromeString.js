let str = 'hello';
let RevStr = str.split('').reverse().join('');
if (str === RevStr) {
  console.log("Palindrome String ")
}
else {
  console.log("Not Palindrome String")
}


let strAr = str.split('');
let RevStrr = []
for (let i = strAr.length - 1; i >= 0; i--) {
  RevStrr.push(strAr[i]);
}
let revStr = RevStrr.join('');
if (revStr === str) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}