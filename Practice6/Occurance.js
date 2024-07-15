let arr = [12, 32, 43, 5, 4534, 23, 3, 23, 53, 64, 65];
let occur = {};
for (let itm of arr) {
  console.log(itm)
  if (occur[itm]) {

    occur[itm]++;
  }
  else {
    occur[itm] = 1;
  }
}
console.log(occur);