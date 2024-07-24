let arr = [12, 32, 43, 54, 64, 56, 76, 8, 78, 89];
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
console.log("Second Smallest ", s)


let AscSort = arr.slice().sort((a, b) => a - b);
console.log("Second Smaller ", AscSort[1])