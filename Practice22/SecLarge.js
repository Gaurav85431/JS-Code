let arr = [12, 32, 4, 3, 54, 56, 4534, 34, 34, 54, 567, 45];
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