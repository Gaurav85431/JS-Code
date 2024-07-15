let num = 153;
let save = num;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev + ld * ld * ld;
  num = Math.floor(num / 10)
}
if (rev === save) {
  console.log("Armstrong")
}
else {
  console.log("Not Armstrong")
}