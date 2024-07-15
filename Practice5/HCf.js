let a = 12, b = 21;
let mul = a * b;
while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("HCF is ", a);
let lcm = mul / a;
console.log("LCM is ", lcm)