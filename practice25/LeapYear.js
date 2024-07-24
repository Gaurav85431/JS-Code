let yr = 2012;
if ((yr % 400 === 0) || (yr % 100 !== 0 && yr % 4 === 0)) {
  console.log("Leap Year")
}
else {
  console.log("No leap Year")
}