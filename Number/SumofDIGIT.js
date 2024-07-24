
let num = 3456
let sum = 0
while (num > 0) {
  ld = num % 10;
  sum = sum + ld;
  num = Math.floor(num / 10)
}
console.log("Sum of Digit ", sum)
