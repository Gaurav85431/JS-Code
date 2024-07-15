for (let i = 0; i < 5; i++) {
  let char = ""
  for (let j = 0; j <= i; j++) {
    char += "*"

  }
  console.log(char)
}



/*

*
**
***
****
*****
****
***
**
*

*/

let n = 5;
for (let i = 0; i < 2 * n; i++) {
  let totalColsInRow = i > n ? 2 * n - i : i;
  let char = ""
  for (let j = 0; j < totalColsInRow; j++) {
    char += "*"
  }
  console.log(char)
}