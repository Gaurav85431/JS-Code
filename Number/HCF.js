
let num1 = 7;
let num2 = 8;

// let num1 = 12;
// let num2 = 18;


let a = num1;
let b = num2;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
// Greatest common divisor = hcf
console.log(`GCD / HCF of ${num1} and ${num2} is ${a}`);
