let arr = [32, 42, 34, 2, 53, 46, 6445, 3, 434, 53, 6];
let nth = 54;
let Asc = arr.slice().sort((a, b) => a - b);
let Dsc = arr.slice().sort((a, b) => b - a);
if (nth <= arr.length) {

  console.log("nth min is ", Asc[nth - 1]);
  console.log("nth max is ", Dsc[nth - 1])
}
else {
  console.log("Exceed Length! Give nth value between ", 0, "and ", arr.length + 1)
}