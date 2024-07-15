let n1 = 12, n2 = 24;
let a = n1, b = n2;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp
}
console.log("HCF ", a);
let lcm = (n1 * n2) / a;
console.log("LCM is ", lcm)