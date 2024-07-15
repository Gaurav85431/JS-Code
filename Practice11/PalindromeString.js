let str = "howoh";
let revStr = str.split('').reverse().join('');
if (str === revStr) {
  console.log("Palindrome")
}
else console.log("Not palindrome")