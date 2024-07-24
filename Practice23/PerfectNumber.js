// 6= factor(1,2,3) <6 :: (1+2+3)=6


let num = 6;
let factor = []
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    factor.push(i)
  }
}
let sum = factor.reduce((acc, itm) => {
  return acc += itm;
})
if (num === sum) {
  console.log("Perfect no.")
}
else {
  console.log("Not Perfect NO.")
}