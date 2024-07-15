// Palindrome
// 131 = 131

let num = 131;
let storeNum = num;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);

}
if (storeNum == rev) {
  console.log("Palindrome")
}
else {
  console.log("Not Palindrome");
}

// 148   =841 (reverse)
// 131 = 131 (palindromde)