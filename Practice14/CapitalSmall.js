let str = "gaurav";
let cap = str.toUpperCase();
let sml = str.toLowerCase();
console.log("Capital and Small is ", cap, " ", sml);



let strAr = str.split('');
let res = "";
for (let i = 0; i < strAr.length; i++) {
  let char = strAr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  res = res + char;
}
console.log("capital is ", res);

let strr = "HEOOISDG";
let strArr = strr.split('')
let small = "";
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);

  }
  small = small + char;
}
console.log("Small is  ", small)