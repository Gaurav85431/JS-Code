// 153
let num = 153;
let saveNum = num;
let ld;
let res = 0;
console.log("32")
while (num > 0) {
  ld = num % 10;
  res = res + ld * ld * ld;
  num = Math.floor(num / 10);
}

if (saveNum == res) {
  console.log("Armstrong")
}
else {
  console.log("not Armstrong")
}