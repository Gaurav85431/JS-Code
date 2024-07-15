let str = "hello";
let FirstCapital = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log("First letter is capital is ---- ", FirstCapital)




// 2
let FirstChar = str.charAt(0);
if (FirstChar >= 'a' && FirstChar <= 'z') {
  FirstChar = FirstChar.toUpperCase()
}
let output = FirstChar + str.slice(1);
console.log(output)