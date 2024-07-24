let arr = [12, 23, 34, 45, 4, 65, 65, 53];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let avg = sum / arr.length;
console.log("sum is   ", sum);
console.log("Average is ", Math.floor(avg))