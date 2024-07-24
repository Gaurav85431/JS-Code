let num = 4443;
if (num < 2) {
  console.log("Neither Prime nor Composite")
}
else {
  let c = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      c++
    }
  }
  if (c == 2) {
    console.log('Prime')
  }
  else {
    console.log("Composite")
  }
}