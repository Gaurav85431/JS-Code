let num = 323;
let save = num;
let rev = 0, ld;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);
}
if (rev === save) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome")
}
