
let num = 23;
if (num <= 1) {
  console.log("Neither Prime Nor composite");
}
else {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log("Prime")
  }
  else if (count === 1) {
    console.log("Neither Prime Nor Composite")
  }
  else {
    console.log("Composite")
  }
}