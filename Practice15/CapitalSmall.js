let str = "hello";
let c = str.toUpperCase();
let s = str.toLowerCase();
console.log("Capital and Small ", c, " ", s)



let strAr = str.split('');
let res = "";
for (let char of strAr) {
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  res = res + char;
}
console.log("Capital is ", res)


let sml = "";
let strArr = str.toUpperCase().split('')
for (let i = 0; i < strArr.length; i++) {
  char = strAr[i];
  if (char > 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32)
  }
  sml = sml + char;
}
console.log("Small is ", sml)