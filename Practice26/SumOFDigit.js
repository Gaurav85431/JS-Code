let num = 2334434343;
let sum = 0;
let ld;
while (num > 0) {
  ld = num % 10;
  sum = sum + ld;
  num = Math.floor(num / 10);
}
console.log("Sum of digits is ", sum)