let num = 135;
let ld, rev = 0;
while (num > 0) {
  ld = num % 10;
  rev = rev * 10 + ld;
  num = Math.floor(num / 10);
}
console.log("Reverse is ", rev);