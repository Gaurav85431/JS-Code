let str = "hello";
// let strArr= str.split('');
let strArr = str.charAt(0).toUpperCase() + str.slice(1);
console.log("First capital ", strArr)



// clientcapital

let strAr = str.split('').join('')
let First = strAr.charAt(0);
if (First >= 'a' && First <= 'z') {
  First = First.toUpperCase();
}
let res = First + strAr.slice(1);
console.log("First capital is ", res)