let str = "hello, gaurav how are you";
let res = ""
let strAr = str.split(' ')
for (let itm of strAr) {
  let char = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  res = res + " " + char
}
console.log("Each word first capital is ", res)





let Res = [];
for (let itm of strAr) {
  let char = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  Res.push(char);
}
let ResStr = Res.join(' ');
console.log("Each word first cap is ", ResStr)