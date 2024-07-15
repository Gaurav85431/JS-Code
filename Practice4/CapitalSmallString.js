let str = "hello";
console.log(str.toUpperCase());
console.log(str.toLowerCase());




let strArr = str.split('');
let CapitalArr = [];
for (let i = 0; i < str.length; i++) {
  let char = strArr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  CapitalArr.push(char)
}
let capitalStr = CapitalArr.join('')
console.log(CapitalArr);
console.log("capital string ", capitalStr)








// Small string
let strn = "HELOE";
let StrArr = strn.split('');
let SmallStrArr = []
for (let i = 0; i < StrArr.length; i++) {
  let char = StrArr[i];
  if (char > 'A' && char < 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32)
  }

  SmallStrArr.push(char);
}

console.log("Small me ", SmallStrArr.join(''))