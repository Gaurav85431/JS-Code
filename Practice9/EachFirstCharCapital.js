let str = "Hello gaurav how are you";
let res = str.split(' ');
let out = [];
let result = "";
for (let itm of res) {
  itm = itm[0].toUpperCase() + itm.slice(1);
  out.push(itm);
  result = result + " " + itm;
}

console.log(out.join(' '));
console.log("RESULT IS ", result)



let strAr = str.split(' ');
for (let i = 0; i < strAr.length; i++) {
  strAr[i] = strAr[i].charAt(0).toUpperCase() + strAr[i].slice(1).toLowerCase();
}
console.log("res is ", strAr.join(' '))