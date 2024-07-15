let a = 23, b = 46;

while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("HCF is ", a)