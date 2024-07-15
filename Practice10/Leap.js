let yr = 2000;
if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
  console.log("Leap Year")
}

else {
  console.log("not leap year")
}