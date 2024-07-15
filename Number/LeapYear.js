// 400 aur 4 se divisible ho

let yr = 2004;
if ((yr % 400 == 0) || (yr % 4 == 0 && yr % 100 != 0)) {
  console.log("Leap Year");
} else {
  console.log("Not leap year");
}
