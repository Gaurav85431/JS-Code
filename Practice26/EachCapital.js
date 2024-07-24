let str = "hello gaurav how are you";
let strAr = str.split(' ')
let res = ''
for (let itm of strAr) {

  let first = itm.charAt(0);
  if (first >= 'a' && first <= 'z') {

    itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  }
  res = res + " " + itm;

}
console.log("Each capital is ", res)