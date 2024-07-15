let arr = [342, 4, 53, 45, 5, 36, 46, 357, 65, 436, 3, 46, 537, 753, 5, 35, 346, 634, 43, 6, 43, 356, 6];
let nth = 4;
let Ascending = arr.slice().sort((a, b) => a - b);
let Descending = arr.slice().sort((a, b) => b - a);
if (nth <= arr.length) {
  console.log("Nth max is ", Ascending[nth - 1]);
  console.log("Nth Min is ", Descending[nth - 1])
}
else {
  console.log("OUT of Range")
}
