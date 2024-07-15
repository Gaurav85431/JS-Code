let num = 141;
let saveNum = num;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);
}
if (saveNum === rev) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}