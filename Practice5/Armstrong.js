let num = 153;
let ld, rev = 0;
let SaveNum = num;
while (num > 0) {
  ld = num % 10;
  rev = rev + ld * ld * ld;
  num = Math.floor(num / 10)
}
if (SaveNum === rev) {
  console.log('Armstrong')
}
else {
  console.log("Not Armstrong");
}