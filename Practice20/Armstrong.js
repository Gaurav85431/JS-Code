let num = 153;
let saveNum = num;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);
}
if (saveNum === rev) {
  console.log("Armstrong No.")
}
else {
  console.log("Not Armstrong no.")
}