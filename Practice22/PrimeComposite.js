let num = 12;
if (num <= 1) {
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
    console.log("Prime No")
  }
  else {
    console.log("Composite No.")
  }
}