let num = 153;
let SaveNum = num;
let rev = 0, ld;
while (num > 0) {
  ld = num % 10;
  rev = rev + ld ** 3;
  num = Math.floor(num / 10)

}
if (SaveNum === rev) {
  console.log("Armstrong")
}
else {
  console.log("Not Armstrong")
}