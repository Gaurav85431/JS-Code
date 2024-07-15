let arr = [23, 334, 5, 54, 6, 56, 76, 4, 54, 34, 5467, 8];
let AscSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);

let Max = AscSort[0];
let Min = AscSort[arr.length - 1];

console.log("Max ", Max, " and Min ", Min);


let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("Max and Min ", max, " and ", min);


let Maxx = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (Maxx < arr[i]) {
    Maxx = arr[i];
  }
}

let Minn = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (Minn > arr[i]) {
    Minn = arr[i];
  }
}
console.log("Max and Min ", Maxx, " and ", Minn);