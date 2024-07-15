let arr = [12, 23, 43, 54, 56, 54, 43, 54, 56, 54, 43, 54, 56, 54, 43];
nth = 5;
let asc = arr.slice().sort((a, b) => a - b);
let dsc = arr.slice().sort((a, b) => b - a);
if (nth <= arr.length) {
  let min = asc[nth - 1];
  let max = dsc[nth - 1];
  console.log(`Nth max and min is ${max} and ${min}`)

}
else {
  console.log("more than size of array")
}