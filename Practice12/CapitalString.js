let str = "hello";
console.log(str.toUpperCase());
console.log(str.toLowerCase());




let strArr = str.split('');
let res = ""
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  res = res + char;
}
console.log("In capital ", res)


let st = "heEEWLKWEJFEOIJEGOJWO";
let StArr = st.split('');
let result = "";
for (let i = 0; i < StArr.length; i++) {
  let char = StArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  result = result + char;
}
console.log("In Small ", result)