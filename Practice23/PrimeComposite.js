let num = 32;
if (num < 1) {
  console.log("neither prime nor composite")
}
else {
  let c = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      c++;
    }
  }
  if (c == 2) {
    console.log("prime")
  }
  else {
    console.log(
      "Composite"
    )
  }
}