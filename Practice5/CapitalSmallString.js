let str = "hello";
let AllCapital = str.toUpperCase();
let AllSmall = str.toLowerCase();
console.log(AllCapital, "-----------", AllSmall);




let strArr = str.split('');
let CapitArr = []
for (let i = 0; i < strArr.length; i++) {

  let char = strArr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  CapitArr.push(char)
}
let CapitalStr = CapitArr.join('');

let SmallArr = [];
for (let i = 0; i < CapitArr.length; i++) {
  let char = CapitArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  SmallArr.push(char)
}
let SmallStr = SmallArr.join('');
console.log("Capital", CapitalStr, "   and small  is ", SmallStr)