let str = "hellogauravhowareyou";
let f = str.substring(0, 5);
let s = str.slice(5, 11);
let t = str.slice(11, 14);
let fr = str.slice(14, 17);
let fv = str.slice(17);
console.log(`${f}   ${s}  ${t}   ${fr}   ${fv}`)

/*
slice()-> ye negative index ko count karta hia from end.
slice(1,4)
slice() - array aur string dono ke liye

substring()-> ye negative index ko 0 treat karta hai.
substring(3,1) --change--> substring(1,3)
substring() sirf string ke liye.

*/