let arr = [22, 33, 44, 55, 66, 77, 88, 99, 111];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let Avg = sum / arr.length;
console.log("Avg ", Avg);


