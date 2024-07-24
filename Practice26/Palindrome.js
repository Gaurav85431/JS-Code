let num = 13631;
let saveNum = num;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10)
}
if (rev === saveNum) {

  console.log("Palindrome is ",)
}
else {
  console.log("Not palindrome")
}