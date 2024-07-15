let arr = [23, 23, 43, 54, 6, 57, 87, 98, 6, 563, 75, 4323, 2, 31, 35, 45, 56, 5, 6, 54, 46, 5, 7, 68, 45]

let ArrSort = arr.slice().sort((a, b) => a - b);
let DscSort = arr.slice().sort((a, b) => b - a);
// console.log("arr sort ", ArrSort)


let nth = 4;
console.log(`${nth} max is ${ArrSort[nth - 1]}`)
console.log(`${nth} min is ${DscSort[nth - 1]}`)



// 2nd way without sort()---
let num = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let n = 5;
if (n > num.length) {
  // console.log(null);
  console.log("More than length of array");
}
else {

  let NthMax = [];
  for (let i = 0; i < n; i++) {
    let max = -Infinity;// max ka value kisi no. se chhoti ho.
    let maxIndex = -1;

    for (let j = 0; j < num.length; j++) {
      if (!NthMax.includes(num[j]) && num[j] > max) {
        max = num[j];
        maxIndex = j;
      }
    }

    if (maxIndex !== -1) {
      NthMax.push(max);
    }

  }

  console.log("Nth max ", NthMax[n - 1])


}