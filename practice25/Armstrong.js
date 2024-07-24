let num = 153;
let ld, re = 0;
let saveNum = num;
while (num > 0) {
  ld = num % 10;
  re = re + ld * ld * ld;
  num = Math.floor(num / 10)
}
if (re === saveNum) {
  console.log("Armstrong No. ")
}
else {
  console.log("Not Armstrong No")
}