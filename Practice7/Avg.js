let arr = [12, 42, 334, 53, 4, 23, 4, 353, 4];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
});
let avg = sum / arr.length;
console.log("sum is ", sum)
console.log(avg)