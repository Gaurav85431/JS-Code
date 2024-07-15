let arr = [32, 34, 54, 567, 8, 8, 5, 4, 534, 23, 13, 1, 53, 42];
let SubArr1 = arr.slice(0, 4);
let SubArr2 = arr.slice(2, 5);
console.log("Sub Array 1 & 2 ", SubArr1, " and ", SubArr2);


let SubAr = [];
for (let i = 0; i < 5; i++) {
  SubAr.push(arr[i]);
}
console.log("Sub array is -- ", SubAr)



let index = [3, 4, 6, 1, 6, 8, 9, 0];
let Val = index.map((itm) => arr[itm]);
console.log("Sub Array is ", Val);