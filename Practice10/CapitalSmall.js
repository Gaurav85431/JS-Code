let str = "hello Gaurav";
let strCapital = str.toUpperCase();
let strSmall = str.toLowerCase();
console.log(" ", strCapital);
console.log(" ", strSmall)


/*-
let strArr = str.split('');
let char;
let result = "";
for (let i = 0; i < strArr.length; i++) {
  char = strArr[i];

  // char = char.toUpperCase();
  if (char >= 'a' && char <= 'z') {

    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  result = result + char;
}



let myStr = "GET MY WORTH";
let strAr = myStr.split('');
let capRes = ""
for (let i = 0; i < strAr.length; i++) {
  let myChar = strAr[i];
  if (myChar >= 'A' && myChar <= 'Z') {
    myChar = String.fromCharCode(myChar.charCodeAt(0) - 32)
  }
  capRes = capRes + myChar;

}
console.log("Capital is ", result)
console.log("Small is ", capRes)
*/



let string = "Gaurav Pushpam Mishra ";
let small = "", capital = "";
for (let i = 0; i < string.length; i++) {
  let char = string[i];
  if (char >= 'A' && char <= 'B') {
    char = String.fromCharCode(char.charCodeAt(0) + 32)
  }
  small = small + char;

  let myChar = string[i];
  if (myChar >= 'a' && myChar <= 'z') {
    myChar = String.fromCharCode(myChar.charCodeAt(0) - 32)
  }
  capital = capital + myChar

}

console.log("Capital and Small me ", capital, " and ", small)

