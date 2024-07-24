let str = "hello gaurav";
let strr = str.split('').join('').split('');
// console.log("---", strr)
let res = ''
for (let itm of strr) {
  itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();

  res = res + itm;

}
console.log("Capital string is ", res)