let a = 12, b = 14;
let n1 = a, n2 = b;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
let lcm = (n1 * n2) / a
console.log('LCM ', lcm)
console.log("HCF ", a)