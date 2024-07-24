let arr = [23, 34, 43, 43, 434, 45, 4554, 434546, 45, 34, 34, 3, 35, 35, 4553, 5, 45, 3, 53, 3, 353, 3, 535, 553, 35]
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
console.log("Sum is ", sum);
let avg = sum / arr.length;
console.log("Average is ", Math.floor(avg));