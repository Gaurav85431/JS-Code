let arr = [12, 2, 434, 3, 3, 4, 454, 89, 56, 453, 34, 43, 34, 46, 7, 7, 6, 67];
let Nth = 19;
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);

if (Nth <= arr.length)
  console.log("Nth max is ", AscSort[Nth - 1], " and Nth min is ", DscSort[Nth - 1]);
else
  console.log("Not in range")


// Max and min

console.log("Max is ", AscSort[arr.length - 1], ' and min is ', AscSort[0])
console.log("Max is ", DscSort[0], ' and min is ', DscSort[arr.length - 1])