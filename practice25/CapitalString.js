let str = "hello";
let strAr = str.split('');
let res = ""
for (let itm of strAr) {
  if (itm >= 'a' && itm <= 'z') {

    itm = String.fromCharCode(itm.charCodeAt(0) - 32)
  }
  res = res + itm;
}
console.log("Capital String is ", res)


// each word capital
let strr = "hello how are you";
let StrAr = strr.split(' ');
let Res = [];
for (let itm of StrAr) {
  let firstChar = itm.charAt(0);
  let char;
  if (firstChar >= 'a' && firstChar <= 'z') {
    char = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  }
  Res.push(char)
}
console.log("Capital Each word is ", Res.join(' '))