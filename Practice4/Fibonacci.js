let term = 6;
let a = 0; b = 1;
for (let i = 0; i <= term; i++) {
  console.log(" ", a);
  let c = a + b;
  a = b;
  b = c;
}