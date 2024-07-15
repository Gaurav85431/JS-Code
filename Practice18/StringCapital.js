let str = "hello";
let sCap = str.toUpperCase();
let sSml = str.toLowerCase();
console.log("Capital and Small is ", sCap, " ", sSml)




//  
let strArr = str.split('');
let res = ""
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  res = res + char;
}
console.log("String Capital ", res)



let Res = "";
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  Res = Res + char;
}
console.log("String Small is ", Res)