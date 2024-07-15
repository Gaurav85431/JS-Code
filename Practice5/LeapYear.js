let year = 2000;
if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
  console.log("Leap")
}
else {
  console.log("not leap")
}