let str = "hello";
let StrAr = str.split('');
let res = ""
for (let itm of StrAr) {
  let char;
  char = itm;
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  res = res + char;
}
console.log("Capital is ", res)