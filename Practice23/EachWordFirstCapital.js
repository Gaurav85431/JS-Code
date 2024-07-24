let str = "hello gaurav how are you";
let strAr = str.split(' ');
let CapitalArr = []
for (let itm of strAr) {
  itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  CapitalArr.push(itm)
}
let CapitalString = CapitalArr.join(' ');
console.log("Each word ka first Capital is ", CapitalString)