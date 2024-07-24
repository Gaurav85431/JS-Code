let str = "hello gaurav how are you";
let strAr = str.split(' ');
let Cap = ''
for (let itm of strAr) {
  let char = itm.charAt(0).toUpperCase() + itm.slice(1);
  Cap = Cap + " " + char;
}
console.log("String Capital is ", Cap)