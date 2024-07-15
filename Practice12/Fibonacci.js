let a = 0, b = 1, c;
let term = 100;

for (let i = 0; i < term; i++) {
  console.log(" ", a);
  c = a + b;
  a = b;
  b = c;
}