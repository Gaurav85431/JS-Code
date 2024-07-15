let num = [12, 32, 43, 5, 32, 323, 31];
let sum = num.reduce((acc, itm) => {
  acc += itm;
  return acc;
})
let avg = sum / num.length;
console.log("Avg ", avg)
console.log("Avg in no. ", Math.round(avg))



// subarray
let arr = [12, 23, 43, 54, 6, 534, 3];
let subArr = arr.slice(1, 4);
let subArr2 = arr.slice(4);
console.log("sub a1,2 ", subArr, "  ", subArr2)

let index = [1, 5, 3, 4];
let subArray = index.map((itm) => arr[itm]);
console.log('Sub array ', subArray)