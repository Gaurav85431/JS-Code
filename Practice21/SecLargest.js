let arr = [23, 34, 54, 65, 76, 87, 98];
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
console.log("Second Largest is ", s)