let num = 2334235;
let ld, sum = 0;
while (num > 0) {
  ld = num % 10;
  sum = sum + ld;
  num = Math.floor(num / 10)
}
console.log("Sum of digit ", sum)


