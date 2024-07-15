// 153
let num = 153; let save = num;
let ld, pal = 0;
while (num > 0) {
  ld = num % 10;
  pal = pal + ld ** 3;
  num = Math.floor(num / 10)
}
if (save === pal) {
  console.log("Armstrong ")
}
else console.log("Not armstrong")