// 6= 1+3+2
let num = 28;
let factor = []
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    factor.push(i)
  }
}
// console.log("-- ", factor)
let sum = factor.reduce((acc, itm) => {
  return acc += itm;
})
if (sum === num) {
  console.log("Perfect No.")
}
else {
  console.log("Not Perfect No")
}