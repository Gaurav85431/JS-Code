// 0 1 1 2 3 5 8 13 ...
let term = 48;
let a = 0; b = 1;
for (let i = 0; i < term; i++) {
  console.log(" ", a);
  c = a + b;
  a = b;
  b = c;
}
