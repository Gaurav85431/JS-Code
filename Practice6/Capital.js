// ALL CAPITAL 

let str = "hello";
let strAr = str.split('');
let capital = []
for (let i = 0; i <= strAr.length - 1; i++) {
  let char = strAr[i];
  if (char >= 'a' && char <= 'z') {
    // char = String.fromCharCode(char - 32)❌
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  capital.push(char)
}
console.log(capital)
let Str = capital.join('');
console.log(Str)



let result = "";
for (let i = 0; i <= strAr.length - 1; i++) {
  let char = strAr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(charCodeAt(0) + 32)
  }
  result = result + char;
}
console.log(result)