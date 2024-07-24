let num = 153;
let saveNum = 153, re = 0;
while (num > 0) {
  ld = num % 10;
  re = re + ld * ld * ld;
  num = Math.floor(num / 10)
}
if (saveNum === re) {
  console.log("Armstrong")
}
else {
  console.log("Not Armstrong")
}