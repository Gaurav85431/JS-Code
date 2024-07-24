let arr = [12, 32, 43, 54, 56, 75, 86, 87, 98];
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
let nth = 5;
if (nth > arr.length) {
  console.log("nth value is exceed from array ")
}
else {
  console.log("Nth max is ", AscSort[nth - 1]);
  console.log("nt min is  ", DscSort[nth - 1])
}