let str = "hello";
let fCap = str.charAt(0).toUpperCase() + str.slice(1);
console.log("First cap is ", fCap)


let strAr = str.split('');
let res = ""
let char = strAr[0];
res = char.toUpperCase() + str.slice(1);
console.log("FIst capi    ", res)