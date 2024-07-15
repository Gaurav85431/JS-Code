let str = "hello";
let Cap = str.toUpperCase();
let Sml = str.toLowerCase();
console.log("Capital and Small is ", Cap, " and ", Sml);



let StrAr = str.split('');
let res = ""
for (let itm of StrAr) {
  if (itm >= 'a' && itm <= 'z') {
    itm = String.fromCharCode(itm.charCodeAt(0) - 32)
  }
  res = res + itm;
}
console.log("Capital is ", res);


let StrArr = str.toUpperCase().split('');
let sml = ""
for (let i = 0; i < StrArr.length; i++) {
  let char = StrAr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0))
  }
  sml = sml + char;
}
console.log("Small is ", sml)