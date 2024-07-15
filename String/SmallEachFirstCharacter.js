// How => hOW

let str = "how are you, Gaurav";
let strArr = str.split(' ');

for (let i = 0; i < strArr.length; i++) {

  strArr[i] = strArr[i].charAt(0).toLowerCase() + strArr[i].slice(1).toUpperCase();
}
let StrString = strArr.join(' ');
console.log(" in   String  ", StrString)