let a = 10, b = 20;
let n1 = a, n2 = b;
while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("HCF ", a);
let lcm = (n1 * n2) / a;
console.log("LCM ", lcm)