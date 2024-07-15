let arr = [12, 32, 43, 54, 65, 89, 65, 45, 34, 23, 13];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let Avg = sum / arr.length - 1;
console.log("Average is ", Math.floor(Avg));



let Add = 0;
for (let i = 0; i < arr.length; i++) {
  Add = Add + arr[i]
}
console.log("Addition is ", Add);


let add = 0;
for (let itm of arr) {
  add = add + itm;
}
console.log("Addition is ", add)