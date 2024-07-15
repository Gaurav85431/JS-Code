let str = "hello";
let strs = str[0].toUpperCase() + str.slice(1);
console.log(strs)



let strr = "hello world";
let strAr = strr.split(' ');
for (let i = 0; i < strAr.length; i++) {
  strAr[i] = strAr[i].charAt(0).toUpperCase() + strAr[i].slice(1)
}
let strSt = strAr.join(' ');
console.log(strSt);

