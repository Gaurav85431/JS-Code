// Average without an array
let a = 1, b = 2, c = 4, d = 5, e = 6;

sum = a + b + c + d + e;
avg = sum / 5;
console.log(avg)


// avg with array;
let num = [12, 32, 43, 5, 65, 64, 3, 43, 46];
let sum2 = num.reduce((acc, itm) => {
  return acc += itm;
})
avg2 = sum2 / num.length;
console.log('avg is ', avg2)


// avg with for-of
let add = 0;
for (let itm of num) {
  add = add + itm;
}
console.log(add)
Avgr = add / num.length;
console.log("avgr ", Avgr)