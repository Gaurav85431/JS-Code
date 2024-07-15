// 153
let num = 153;
let SaveNum = num;
let ld, rev = 0;
let save = num;
while (num > 0) {
  ld = num % 10;
  rev = rev + ld * ld * ld;
  num = Math.floor(num / 10);
}
if (SaveNum === rev) {
  console.log("Armstrong no. ")
}
else {
  console.log("Not Armstrong No.")
}