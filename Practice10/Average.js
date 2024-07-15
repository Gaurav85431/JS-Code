let arr = [23, 23, 4, 3, 54, 64, 6, 7, 46, 46, 46, 3, 46, 75];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
console.log("Sum is ", sum);
let avg = sum / arr.length;
console.log("Average is ", avg)
console.log("Average is ", Math.floor(avg));



