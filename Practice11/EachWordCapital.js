let str = "hello gaurav how are you";
let strArr = str.split(' ');

let FirstCapital = []
for (let itm of strArr) {
  itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  FirstCapital.push(itm)
}
let CapitalString = FirstCapital.join(' ');
console.log("String first capital is ", CapitalString)



// 2nd way
let strr = "hello gaurav how are you";
let strAr = strr.split(' ');
let result = "";
for (let itm of strAr) {
  itm = itm.charAt(0).toUpperCase() + itm.slice(1).toLowerCase();
  result = result + " " + itm
}
console.log("String first capital is ", result);





// 3rd:-
let st = "hello gaurav how are you";
let StrAr = st.split(' ');
// let Capital = [];
for (let i = 0; i < StrAr.length; i++) {
  StrAr[i] = StrAr[i].charAt(0).toUpperCase() + StrAr[i].slice(1).toLowerCase();
  // Capital.push(StrAr[i])
}
// let CapitalStr = Capital.join('');
// console.log("Capital string is ", CapitalStr)
let CapitalStrin = StrAr.join(' ');
console.log("Capital string is ", CapitalStrin)