/*
*****
 ****
  ***
   **
    *
**/
for (let i = 5; i > 0; i--) {
  let line = "";       // initialize
  let gap = "";
  for (let j = 0; j < i; j++) {
    line += "*";
  }
  for (let k = 0; k < 5 - i; k++) {
    gap += " "
  }
  console.log(gap, "", line);
}