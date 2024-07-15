let yr = 2004;
if ((yr % 100 !== 0) && (yr % 4 === 0) || (yr % 400 === 0)) {
  console.log("Leap year ", yr)
}
else {
  console.log("Not Leap Year")
}