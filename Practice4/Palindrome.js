let num = 25276;
let rev = 0, ld;
let saveNum = num;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10)
}
if (saveNum === rev) {
  console.log("Palindrome")
}
else {
  console.log("Not palindrome")
}