let str = "hellogaurav how";
let strArr = str.split('');
let Asc = strArr.slice().sort();
console.log("Asc  ", Asc);


let Dsc = strArr.slice().sort((a, b) => b.localeCompare(a));
console.log("Dsc  ", Dsc)