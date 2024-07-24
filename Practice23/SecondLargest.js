let arr = [12, 32, 43, 54, 65, 76, 45, 43, 32, 23, 12, 34];
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
console.log("Second Largest no. is ", s);

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
console.log("Third Largest is ", T)