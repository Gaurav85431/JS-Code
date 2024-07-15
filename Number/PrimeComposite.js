// Prime and Composite
let num = -1;
let count = 0;

if (num <= 1) {
  console.log("Neither Prime nor Composite");
} else {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log("Prime");
  } else {
    console.log("Composite");
  }
}
