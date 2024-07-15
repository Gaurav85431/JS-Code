// 153
let num = 153;
let store = num;
let ld, res = 0;
while (num > 0) {
  ld = num % 10;
  res = res + ld * ld * ld;
  num = Math.floor(num / 10);
}
if (store === res) {
  console.log("Armstrong No.")
}
else {
  console.log("No Armstrong no.")
}