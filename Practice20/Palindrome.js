let num = 245;
let ld, rev = 0, saveNum = num;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);
}
if (rev === saveNum) {
  console.log("Palindrome No. ")
}
else {
  console.log("Not Palindrome No.")
}