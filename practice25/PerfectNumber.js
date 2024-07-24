let num = 6;
let perfect = []
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    perfect.push(i)
  }
}
let sum = perfect.reduce((acc, itm) => {
  return acc += itm;
})
// console.log("sum ", sum);
// console.log("num ", num)
if (num === sum) {
  console.log("Perfect No.")
}
else {
  console.log("Not Perfect NO.")
}