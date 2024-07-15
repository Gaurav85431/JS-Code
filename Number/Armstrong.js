// Armstrong No

let num = 153;
let storeNum = num;
let res = 0, ld;

while (num > 0) {
  ld = num % 10;
  res = res + ld * ld * ld
  num = Math.floor(num / 10);   //decimal ko remove krne ke liyew
}

if (storeNum == res) {
  console.log("Armstrong")
}
else {
  console.log("Not armstrong")
}