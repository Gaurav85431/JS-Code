let arr = [23, 42, 42, 3, 5, 35, 64, 6, 34, 6, 45, 35, 6, 4, 57, 7, 84, 86, 86, 89, 7, 545, 34, 4, 6, 7, 68, 43];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let Avg = sum / arr.length;
console.log(`Sum is ${sum} and Average is ${Math.floor(Avg)}`)