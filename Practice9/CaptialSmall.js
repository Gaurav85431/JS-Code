let str = "hello world";
let small = str.toLowerCase()
let capital = str.toUpperCase()
console.log(capital, "----------", small)




// ALl letter capital
let strArr = str.split('');
let result = '';
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i]
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32)
  }
  result = result + char;
}
console.log("char is ", result)

// All small letter
let res = "";
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'A' && char <= 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  res = res + char;
}
console.log("result is ", res);