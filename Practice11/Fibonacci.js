let a = 0, b = 1;
let c = 0;
let term = 15;
for (let i = 0; i < term; i++) {
  console.log(" ", a);
  c = a + b;
  a = b;
  b = c;
}