let num1 = 12;
let num2 = 18;

let a = num1;
let b = num2;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
let gcd = a;

let lcm = (num1 * num2) / gcd;

console.log(`LCM of ${num1} and ${num2} is ${lcm}`);
