let arr = [12, 32, 43, 54, 6, 56, 56, 76, 45, 34, 45, 67, 45];
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
console.log("2nd Largest ", s)

let F = Infinity, S = Infinity;
for (let itm of arr) {
  if (itm < F) {
    S = F;
    F = itm;
  }
  else if (itm < S && itm !== F) {
    S = itm;
  }
}
console.log("2nd Smallest is ", S)