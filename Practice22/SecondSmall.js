let arr = [12, 12, 13, 15, 16, 17, 18, 24, 25, 36, 46, 57];
let AscSort = arr.slice().sort((a, b) => a - b);
console.log("Second smallest is ", AscSort[1]);


let f = Infinity, s = Infinity;
for (let itm of arr) {
  if (f > itm) {
    s = f;
    f = itm;
  }
  else if (itm < s && itm !== f) {
    s = itm;
  }
}
console.log(`Second Smaller is ${s}`)