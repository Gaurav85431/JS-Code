let arr = [21, 32, 43, 45, 65, 76, 78, 75, 89, 5067];
let f = -Infinity, s = -Infinity;
for (let itm of arr) {
  if (itm > f) {
    s = f;
    f = itm;
  }
  else if (itm > s && itm <= f) {
    s = itm;
  }
}
console.log("Second Largest No.  ", s)


let F = -Infinity, S = -Infinity, T = -Infinity;
for (let itm of arr) {
  if (itm > F) {
    T = S;
    S = F;
    F = itm;
  }
  else if (itm > S && itm < F) {
    T = S;
    S = itm;
  }
  else if (itm > T && itm < S) {
    T = itm;
  }
}
console.log(`FIrst ${F} Second ${S}  and Third ${T}`);