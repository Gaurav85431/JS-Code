let num = 34;
if (num < 2) {
  console.log("Neither Prime nor Composite")
}
else {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++
    }
  }
  if (count === 2) {
    console.log("Prime No.")
  }
  else {
    console.log("Composite No. ")
  }
}