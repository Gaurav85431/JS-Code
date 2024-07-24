let arr = [32, 12, 42, 4, 2, 23, 2, 32, 3, 23, 4];
let ele = 32;
let c = 0;
for (let i = 0; i < arr.length; i++) {
  if (ele === arr[i]) {
    c++;
  }

}
console.log(`${ele} occur ${c} times`)