let str = "hello";
let strAr = str.split('');
let RevArr = []
for (let char of strAr) {
  let chars = char;
  if (chars >= 'a' && chars <= 'z') {
    chars = String.fromCharCode(chars.charCodeAt(0) - 32);
  }
  RevArr.push(chars)
}
console.log("Capital is ", RevArr.join(''));