let str = "hello gaurav how are you";
let strAr = str.split(' ');
let Cap = []
if (str.length < 1) {
  console.log("String is too small")
}
for (let itm of strAr) {
  itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  Cap.push(itm);
}
let capStr = Cap.join(' ');
console.log("Capital each of first letter ", capStr)



let Sml = [];
for (let itm of strAr) {
  itm = itm.charAt(0).toLowerCase() + itm.slice(1).toUpperCase();
  Sml = Sml + itm;
}
console.log("Small first and capital other is ", Sml)
