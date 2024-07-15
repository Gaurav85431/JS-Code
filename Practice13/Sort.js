let arr = [23, 4, 45, 35, 34, 46, 75, 68, 56, 56, 45, 2, 1, 224, 35, 56, 67, 8, 87, 79, 67];

let ArrSort = arr.slice().sort((a, b) => a - b);
let ArrSortD = arr.slice().sort((a, b) => b - a);
console.log("Asc and Dsc sort is ", ArrSort, " and ", ArrSortD)