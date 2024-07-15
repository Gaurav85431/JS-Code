let num = 5;
let c = 0;
if (num <= 1) {
  console.log("Neither prime nor composite")
}
else {
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      c++;
    }

  }
  if (c === 2) {
    console.log("Prime")
  }
  else {
    console.log("Composite")
  }
}