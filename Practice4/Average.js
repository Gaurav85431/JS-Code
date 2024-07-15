let arr = [12, 43, 54, 56, 76, 65, 45, 86, 56, 45];

let add = arr.reduce((sum, itm) => {
  sum += itm;
  return sum;
})

let avg = add / arr.length;
console.log("sum is ", add);
console.log("avg is ", Math.floor(avg));