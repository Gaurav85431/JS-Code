// 4,54,2,4          16
//  WRONG TARIAKA
/*
let n1 = 12, n2 = 13, n3 = 14, n4 = 15;
let avg;
let sum = n1 + n2 + n3 + n4;
avg = sum / 4;
console.log("avg ", avg);
*/



// 1st way
let values = [12, 13, 14, 15, 16];

let sum = values.reduce((accumulator, currentValue) => {
  // console.log(`Processing element ${currentValue}`);
  return accumulator + currentValue;
}, 0);

let avg = sum / values.length;

console.log("Average is:", avg);


// 2nd way
function Average(Number) {
  let sum = 0, avg;
  for (let num of Number) {
    sum += num;
  }
  avg = sum / Number.length
  console.log("average is ", avg);
}
const Number = [10, 20, 30, 40];
Average(Number);