let arr = [12, 23, 34, 45, 56, 78, 68, 90, 35];
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
console.log("Second largest is ", s)


