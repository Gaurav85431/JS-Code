let str = "hello";
/*
let strArr = str.split('');  // ❌ bcz 👇 string per kam karega na ki array per;
let capital = strArr[0].toUpperCase() + strArr.slice(1);
console.log(capital)
let capitalFirst = capital.join('');
console.log(capitalFirst)
*/

let CapitalFist = str[0].toUpperCase() + str.slice(1);
console.log("Capital me ", CapitalFist)


let smallFirst = str[0].toLowerCase() + str.slice(1);
console.log("  Smalll me ", smallFirst)