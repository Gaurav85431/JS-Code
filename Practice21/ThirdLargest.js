let arr = [12, 32, 43, 54, 65, 76, 87, 98, 101, 321];
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
console.log("Third Largest is ", t);