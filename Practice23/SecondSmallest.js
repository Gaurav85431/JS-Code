let arr = [23, 32, 34, 5, 4, 56, 767, 67, 56, 54, 34, 34, 6, 7, 678, 56]
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
console.log("Second Smallest is ", s)



// Third Smallest
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
console.log("Third Smallest is ", T)
console.log("F S T ", F, " ", S, " ", T)