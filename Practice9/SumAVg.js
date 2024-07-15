let arr = [2, 43, 5, 3, 2, 5, 5, 64, 54, 4634, 45, 64, 35, 7, 5, 86, 6, 64, 35, 35, 35, 35, 856];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
console.log("Sum is ", sum);
let avg = sum / arr.length; // trishika solution pvt ltd
console.log("Average is ", avg);