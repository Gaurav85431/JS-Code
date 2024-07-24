let arr = [12, 23, 43, 54, 56, 67, 77, 78, 76, 56, 45, 43, 34, 23, 23, 122, 43, 54, 56, 7, 8, 9];
let f = Infinity, s = Infinity;
for (let itm of arr) {
  if (itm < f) {
    s = f;
    f = itm;
  }
  else if (itm < s && itm !== f) {
    s = itm;
  }
}
console.log(`Sabse small ${f} aur 2nd small is ${s}`)


let F = Infinity, S = Infinity, T = Infinity;
for (let itm of arr) {
  if (itm < F) {
    T = S;
    S = F;
    F = itm;
  }
  else if (itm < S && itm !== F) {
    T = S;
    S = itm;
  }
  else if (itm < T && itm !== S) {
    T = itm;
  }
}
console.log(`1 small :${F}  2nd Small : ${S}   3rd Small: ${T}`);