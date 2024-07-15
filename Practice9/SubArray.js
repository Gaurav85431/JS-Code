let arr = [234, 34, 64, 23, 2, 62, 42, 644, 7247, 2, 347, 4];
let subArr = arr.slice(1, 5);
console.log("SUb array is ", subArr)

let index = [2, 4, 6, 7];
let SubArr = index.map((itm) => arr[itm]);
console.log("SUbarr is ", SubArr)




let SubArray = [];
for (let i = 0; i < 6; i++) {
  SubArray.push(arr[i]);
}
console.log("Sub array is ", SubArray)