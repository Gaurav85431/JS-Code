let str = "hello";
console.log(str.toUpperCase());
console.log(str.toLowerCase())


// manually

let SmallResult = "";
for (let i = 0; i < str.length; i++) {
  let char = str[i];     // particular character
  if (char > 'A' && char < 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);//wo character  ko small
  }
  SmallResult = SmallResult + char;
}

console.log(" small manually ", SmallResult)

// captial
let CapitalResult = "";
for (let i = 0; i < str.length; i++) {
  let char = str[i];     // particular character
  if (char > 'a' && char < 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);//wo character  ko small
  }
  CapitalResult = CapitalResult + char;
}

console.log(" capital manually ", CapitalResult)

