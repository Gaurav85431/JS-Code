let arr = [12, 43, 5, 54, 34, 43, 646, 786, 56, 46, 54, 68, 78, 76, 90, 87];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let avgr = sum / arr.length;
let avg = Math.floor(avgr)
console.log(`Average is ${avg}`)