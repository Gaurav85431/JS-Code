let arr = [12, 32, 43, 54, 56, 67, 78, 89];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
console.log("Sum ", sum)
let avg = sum / arr.length;
console.log("Avg is", Math.floor(avg))