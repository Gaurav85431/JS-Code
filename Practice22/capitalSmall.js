let str = "hello world";
let strAr = str.split(' ');

let res = ''
for (let itm of strAr) {

  itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  res = res + ' ' + itm;
}
console.log("Capital Letter ", res)