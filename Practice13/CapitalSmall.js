let str = "hello";
let cap = str.toUpperCase();
let sml = str.toLowerCase();
console.log("Capital and small is ", cap, " and ", sml)


let strr = str.slice();
let word;
let res = ''
for (let i = 0; i < strr.length; i++) {
  word = strr[i];
  if (word >= 'a' && word <= 'z') {

    word = String.fromCharCode(word.charCodeAt(0) - 32);
  }
  res = res + word;
}
console.log("Capital is ", res)



let w, result = '';
for (let i = 0; i < str.length; i++) {
  w = str[i];
  if (w >= 'A' && w <= 'Z') {
    w = String.fromCharCode(w.charCodeAt(0) + 32)
  }
  result = result + w;
}
console.log("Small is ", result)