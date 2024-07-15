let num = 153;
let SaveNum = num;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev + ld * ld * ld;
  num = Math.floor(num / 10);
}
if (SaveNum === rev) {
  console.log("Armstrong No.")
}
else {
  console.log("Not armstrong no.")
}