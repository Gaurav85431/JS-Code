let a = 12, b = 24;
let n1 = a, n2 = b;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("HCF is ", a);
let lcm = (n1 * n2) / a;
console.log("LCM is ", lcm)