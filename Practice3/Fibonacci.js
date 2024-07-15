// 0 1 1 2 3 5 8 ...
let term = 5;
let a = 0, b = 1;
for (let i = 0; i < term; i++) {
  console.log(" ", a)
  let c = a + b;
  a = b;
  b = c;
}


// armstrong--
// 153
let num = 153, res = 0;
let val = num;
while (num > 0) {
  let ld = num % 10;
  res = res + ld * ld * ld;
  num = Math.floor(num / 10)
}
if (val === res) {
  console.log("armstrong")
}
else {
  console.log("NOt armstrong")
}