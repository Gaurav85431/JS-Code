let str = "hello";
let strArr = str.split('');
let res = ''
for (let i = 0; i <= strArr.length - 1; i++) {
  let char = strArr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  res = res + char;
}
console.log('Capital String ', res)


let st = "HELLO";
let StrAr = st.split('');
let result = '';
for (let itm of StrAr) {
  let char = itm;
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32)
  }
  result = result + char;
}
console.log("Small string is ", result)