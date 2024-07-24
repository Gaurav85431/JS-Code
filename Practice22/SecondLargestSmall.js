let arr = [12, 23, 34, 43, 54, 4, 6, 56, 76, 87, 78, 89, 76, 65, 54, 34, 23]
let f = -Infinity, s = -Infinity;
for (let itm of arr) {
  if (itm > f) {
    s = f;
    f = itm;
  }
  else if (s < itm && itm < f) {
    s = itm;
  }
}
console.log("Second largest is ", s);


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
console.log("Second Smallest is ", S)