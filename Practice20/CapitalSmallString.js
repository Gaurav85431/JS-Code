let str = "hello";
let strAr = str.split('');
let res = "";
for (let i = 0; i < strAr.length; i++) {
  let char = strAr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  res = res + char;
}

console.log("Capital is ", res)




let Res = ""
let strCap = str.toUpperCase();
let strCapArr = strCap.split('')
for (let i = 0; i < strCapArr.length; i++) {
  let char = strCapArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32)
  }
  Res = Res + char;
}
console.log("Small is ", Res)