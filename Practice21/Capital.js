let str = "hello";
console.log("Capital is ", str.toUpperCase());


let strAr = str.split('');
let res = ""
for (let i = 0; i < strAr.length; i++) {
  char = strAr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  res = res + char;
}
console.log("Capital is ", res);

let strArr = str.toUpperCase().split('');
let ress = '';
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32)
  }
  ress = ress + char;
}
console.log("Small is ", ress)