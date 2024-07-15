let str = "hello world";
let strArr = str.split('');
let result = "";
for (let i = 0; i < strArr.length; i++) {
  let char = strArr[i];
  if (char >= 'a' && char <= 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  result = result + char;
}
console.log("Capital is ", result);