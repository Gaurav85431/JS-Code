let arr = [12, 32, 54, 65, 67, 67, 56, 45, 34, 23, 13];
let f = -Infinity, s = -Infinity;
for (let itm of arr) {
  if (itm > f) {
    s = f;
    f = itm;
  }
  else if (itm > s && itm < f) {
    s = itm;
  }
}
console.log("Second largest number is ", s)


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
console.log(`First ${F}  Second ${S}  Third ${T}`)