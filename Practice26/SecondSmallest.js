let arr = [23, 34, 34, 5, 54, 43, 34, 54, 56, 6, 4, 3, 34, 46, 75, 76, 5654, 5, 56, 678, 67, 5, , 56, 76, 76, 76, 545];
let f = Infinity, s = Infinity;
for (let itm of arr) {
  if (f > itm) {
    s = f;
    f = itm;
  }
  else if (s > itm && itm !== f) {
    s = itm;
  }
}
console.log(`First smallest is ${f}`)
console.log(`Second smallest is ${s}`)



let F = Infinity, S = Infinity, T = Infinity;
for (let itm of arr) {
  if (F > itm) {
    T = S;
    S = F;
    F = itm;
  }
  else if (S > itm && itm !== F) {
    T = S;
    S = itm;
  }
  else if (T > itm && itm !== S) {
    T = itm;
  }
}
console.log(`f : ${F}   S : ${S}     T: ${T}`)