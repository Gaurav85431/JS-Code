let str = 'hellolleh';
let save = str;
let Rev = str.split('').reverse().join('');
if (str.length < 1) {
  console.log("String is not found")
}
else {


  if (Rev === str) {
    console.log("Palindrome")
  }
  else
    console.log("Not Palindrome")
}