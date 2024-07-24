let str = "hellogaurav";
let strRev = str.split('').reverse().join('');
console.log("String Reverse ", strRev)



let strR = [];
for (let i = str.length - 1; i >= 0; i--) {
  strR.push(str[i])
}
let strRString = strR.join('');
console.log("String Reverse ", strRString);




let string = "";
for (let i = str.length - 1; i >= 0; i--) {
  string = string + str[i];
}
console.log("Reverse String ", string)