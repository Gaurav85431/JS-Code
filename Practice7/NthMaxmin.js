let arr = [12, 4, 5, 46, 53, 434, 3, 433, 5, 5252];
let sortArrAsc = arr.slice().sort((a, b) => a - b);
let sortArrDsc = arr.slice().sort((a, b) => b - a);

let nth = 5;
if (nth <= arr.length) {
  console.log("Nth max is ", sortArrAsc[nth - 1]);
  console.log("Nth min is ", sortArrDsc[nth - 1]);
}
else console.log("Exceed Size of array");