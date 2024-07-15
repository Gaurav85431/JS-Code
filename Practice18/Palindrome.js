let num = 515;
let saveNum = num;
let rev = 0, ld;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);
}
if (saveNum == rev) {
  console.log("Palindrome NO.")
}
else {
  console.log("Not Palindrome No.")
}