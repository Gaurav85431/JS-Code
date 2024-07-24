let arr = [12, 34, 56, 76, 48, 68, 88, 48, 40, 98, 75];
let f = -Infinity, s = -Infinity, t = -Infinity;
for (let itm of arr) {
  if (itm > f) {
    t = s;
    s = f;
    f = itm;
  }
  else if (itm > s && itm < f) {
    t = s;
    s = itm;
  }
  else if (itm > t && itm < s) {
    t = itm;
  }
}
console.log("Third largest is ", t);