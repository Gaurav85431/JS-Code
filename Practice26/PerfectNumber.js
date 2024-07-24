let num = 6;
let factor = [];
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    factor.push(i);
  }
}
let Sum = factor.reduce((acc, itm) => {
  return acc += itm;
})
if (Sum === num) {
  console.log("Perfect No.")
}
else {
  console.log("Not Perfect No.")
}