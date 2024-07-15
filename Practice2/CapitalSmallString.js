let str = "hello";
console.log("capital is ", str.toUpperCase());
console.log("Small is ", str.toLowerCase());

// 2nd way;---- small         then capital
let res = '';
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char > 'A' && char < 'Z') {
    char = String.fromCharCode(char.charCodeAt(0) + 32);
  }
  res = res + char;
}
console.log('Small is ', res)

let Res = '';
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char > 'a' && char < 'z') {
    char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  Res = Res + char
}
console.log("Capital is ", Res)