let arr = [12, 34, 56, 76, 87, 85, 45, 32, 52];
// 1st way
let sumArray = arr.reduce((accu, itm) => {
  return accu += itm;
})
console.log("Array sum ", sumArray);
let average = sumArray / arr.length;
console.log("Avg is ", average);


// 2nd way   --- sum & Avg
let arry = [13, 23, 34, 54, 56, 67];
let sum = 0;
for (let i = 0; i < arry.length; i++) {
  sum = sum + arry[i];
}
console.log("Sum is ", sum);
let avg = sum / arry.length;
console.log("Average is ", avg);





// 3rd way

let s = 0
for (let itm of arr) {
  s = s + itm;
}
console.log("Sum is ", s)
let av = s / arr.length;
console.log("Avg is ", av)