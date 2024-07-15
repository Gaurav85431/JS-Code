let arr = [12, 32, 43, 23, 53, 54, 65, 76, 56, 5, 434, 34];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let avg = sum / arr.length;
console.log("Sum is ", sum, " and avg is ", Math.floor(avg));
