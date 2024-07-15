let arr = [23, 24, 42, 5, 3948, 46, 6, 7, 7, 6, 93, 5, 45, 46, 64, 4, 34, 34, 34];
let nth = 4;
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
if (nth > arr.length) {
  console.log("Exceed array length")
}
else {
  console.log("Nth index per Min ", AscSort[nth - 1]);
  console.log("Nth index per Max is ", DscSort[nth - 1]);
}