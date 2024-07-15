/*
*
**
***

*/

for (let i = 0; i < 5; i++) {
  let line = ""
  for (let j = 0; j <= i; j++) {
    line += "*"
  }
  console.log(line)
}


// --------------------------------------------------------------
/*
***
**
*

*/
for (let i = 5; i >= 0; i--) {
  let line = ""
  for (let j = i; j >= 0; j--) {
    line += "*"
  }
  console.log(line)
}



// -------------------------------------------------------------------
/*
***
 ** 
  *
*/
console.log("3")

for (let i = 0; i < 5; i++) {
  let line = "", gap = "", res = ""
  for (let j = 0; j <= i; i++) {
    line += "*"
    res = gap + line;
    gap += " ";
  }
  console.log(res)
}