let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((acc, itm) => {
  return acc += itm;
})
let avg = sum / arr.length;
console.log(`Sum : ${sum}  Avg: ${avg}`)




let s = 0
for (let itm of arr) {
  s = s + itm;
}
console.log("Sum is ", s)

let av = s / arr.length;
console.log("Avg is ", av)




let summ = 0;
for (let i = 0; i < arr.length; i++) {
  summ = summ + arr[i]
}
let avgr = summ / arr.length;
console.log(`Sum: ${summ} and Avg: ${avgr}`)