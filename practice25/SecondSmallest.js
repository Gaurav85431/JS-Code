let arr = [32, 34, 54, 56, 67, 4, 788, 56, 45, 3, 2, 3, 45, 646];
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
console.log("Second Small ", s)


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
console.log("Third Small is ", T)