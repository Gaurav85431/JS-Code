let yr = 2000;
if ((yr % 400 === 0) || (yr % 4 === 0) && (yr % 100 !== 0)) {
  console.log("Leap Year")
}
else {
  console.log("Not Leap year")
}