let str = "hello";
let capital = str[0].toUpperCase() + str.slice(1);
console.log(capital)


// Each word first capital
let strr = "hello, how are you";
let strAr = strr.split(' ');
let op = []
for (let itm of strAr) {
  itm = itm[0].toUpperCase + itm.slice(1);
}
console.log(op)