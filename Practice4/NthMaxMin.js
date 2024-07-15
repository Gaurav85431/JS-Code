let arr = [21, 32, 43, 54, 64, 56, 343, 423, 23, 23, 96];
// nth position per max and min

let nthPosition = 6;
let sortarr = arr.slice().sort((a, b) => a - b);
let dessort = arr.slice().sort((a, b) => b - a);

console.log("MAX at nth position ", sortarr[nthPosition]);
console.log("MIN at nth position ", dessort[nthPosition]);

