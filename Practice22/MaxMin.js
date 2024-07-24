let arr = [12, 23, 43, 54, 56, 67, 89, 68];
let arrArr = arr.slice().sort((a, b) => a - b);
console.log("- ", arrArr[arr.length - 1]);
let DscArr = arr.slice().sort((a, b) => b - a);
console.log(" ", DscArr[0]);


let max = arr[0];
for (let i = 0; i < arr.length; i++) {

}