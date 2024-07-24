/*
****
 *** 
  **
   *
*/

for (let i = 4; i >= 0; i--) {
  let line = ""
  let res = ''
  for (let j = 0; j <= i; j++) {  //jo i(row utna space)

    if (i == 0) {
      line += "*"
    }
    else if (i == 1) {
      let space = " "
      line += "*"
      res = space + line;
    }
    else if (i == 2) {
      let space = "  ";
      line += "*";
      res = space + line
    }
    else if (i == 3) {
      let space = "   ";
      line += "*";
      res = space + line
    }

  }
  console.log(res)
}