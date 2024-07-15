let str = "hello gaurav how are you";
let strAr = str.split(' ');
let res = ""
for (let itm of strAr) {
  let char = itm;
  char = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
  res = res + " " + char;
}
console.log("First Capital is ", res)



let Res = [];
for (let itm of strAr) {
  let char = itm;
  char = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
  Res.push(char)
}
let ResStr = Res.join(' ');
console.log("First Capital is ", ResStr)