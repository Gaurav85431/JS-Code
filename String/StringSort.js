let str = "hellogaurav how";
let strArr = str.split('');
let Asc = strArr.slice().sort();
console.log("Asc  ", Asc);

// Capital ke case me captial pehle aayeaga bcz small start from 92(ASCII) capital (65 - ASCII)

let Dsc = strArr.slice().sort((a, b) => b.localeCompare(a));
console.log("Dsc  ", Dsc)// Ypdda