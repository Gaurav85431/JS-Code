let num = 32;
let count = 0;
if (num <= 1) {
  console.log("neither prime nor composite")
}
else {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log("Prime")
  }
  else {
    console.log("Composite")
  }
}