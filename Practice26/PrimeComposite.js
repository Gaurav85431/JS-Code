let num = 44;
if (num < 2) {
  console.log("neither prime nor composite")
}
else {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++
    }
  }
  if (count === 2) {
    console.log("Prime")
  }
  else {
    console.log("Composite")
  }
}