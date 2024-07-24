let arr = [12, 23, 34, 54, 65, 67, 78, 86, 89, 90, 67, 54, 34];
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
console.log("Second small ", s)


let F = Infinity, S = Infinity;
for (let itm of arr) {
  if (itm < f) {
    s = f;
    f = itm;
  }
  else if (itm < s && itm !== f) {
    s = itm;
  }
}
console.log("Second largest is ", s)