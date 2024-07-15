let arr = [12, 4, 4, 24, 32, 42, 24];
let subArr = arr.slice(1, 4);
let subArr2 = arr.slice(2, 4);
console.log(`subarrays are [${subArr}] [${subArr2}]`);



let index = [1, 4, 5];
let val = index.map((itm) => arr[itm]);
console.log("SUb array is ", val)



let subAr = [];
// for(let i=0;i<arr.length;i++){
for (let i = 0; i < 5; i++) {
  subAr.push(arr[i]);
}

