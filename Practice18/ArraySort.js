let arry = [12, 23, 43, 54, 4, 534, 23, 5, 65, 7, 65, 443, 56];
let Asc = arry.slice().sort((a, b) => a - b);
let Dsc = arry.slice().sort((a, b) => b - a);

let arr = arry.slice();
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Asc sort is ", arr);
// 

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("DDDDDDDsc sort is ", arr);


// 
let arrr = arry.slice();
for (let i = 0; i < arrr.length; i++) {
  for (let j = 0; j < arrr.length - i - 1; j++) {
    if (arrr[j] < arrr[j + 1]) {
      let temp = arrr[j];
      arrr[j] = arrr[j + 1];
      arrr[j + 1] = temp;
    }
  }
}
console.log("Des sort is ", arrr)