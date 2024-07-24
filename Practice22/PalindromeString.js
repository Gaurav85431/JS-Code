let str = "GaaG";
let revStr = str.split('').reverse().join('');
if (str === revStr) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}