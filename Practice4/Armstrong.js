// 153
let num = 153, ld, res = 0;
let saveNum = num;
// console.log(undefined + 0)
while (num > 0) {
  ld = num % 10;
  res = res + ld * ld * ld;
  num = Math.floor(num / 10)
}

if (res === saveNum) {
  console.log("Armstrong No.")
}
else {
  console.log("Not armstrong")
}