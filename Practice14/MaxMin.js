let arr = [23, 23, 43, 54, 65, 76, 8756, 3, 44, 324, 45, 56, 34];
let Asc = arr.slice().sort((a, b) => a - b);
console.log("Asc is ", Asc);
console.log("Min is ", Asc[0]);
console.log("Max is ", Asc[arr.length - 1])




let Min = Math.min(...arr);
let Max = Math.max(...arr);
console.log("Min is ", Min, " and Max is ", Max)



let min = arr[0]
for (let i = 0; i < arr.length; i++) {
  let val = arr[i]
  if (min > arr[i]) {
    min = arr[i]
  }
}
console.log("Min is ", min)


let max = arr[0];
for (let itm of arr) {
  if (max < itm) {
    max = itm;
  }
}
console.log("Max is ", max)