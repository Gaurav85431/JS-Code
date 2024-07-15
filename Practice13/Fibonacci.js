
let a = 0, b = 1, c;
let term = 34;
for (let i = 0; i < term; i++) {
  console.log(" ", a);
  c = a + b;
  a = b;
  b = c;
}