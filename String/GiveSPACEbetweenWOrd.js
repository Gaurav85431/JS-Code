
let strr = "hellogaurav";
let star = strr.substring(0, 5) + " " + strr.substring(5)
console.log(star);

/*
slice()-> ye negative index ko count karta hia from end.
slice(1,4)
slice() - array aur string dono ke liye

substring()-> ye negative index ko 0 treat karta hai.
substring(3,1) --change--> substring(1,3)
substring() sirf string ke liye.
*/



// 2nd way
let str = "gauravpushpammishrahowareyou";
let f = str.slice(0, 6);
let s = str.slice(6, 13);
let t = str.slice(13, 19);
let fr = str.slice(19, 22);
let sx = str.slice(22, 25);
let sv = str.slice(25);
let Combine = f + " " + s + " " + t + " " + fr + " " + sx + " " + sv;
console.log("COmbine  ", Combine)

