let str = "hello gaurav how are you";
let searchItm = 'h';
let Found = str.indexOf(searchItm);
if (Found === -1) {
  console.log("not found")
}
else {
  console.log(`${searchItm} is found at ${Found} index`)
}


let sItm = /hello/;
let Founded = str.match(sItm);
if (Founded) {
  console.log(sItm, ' is founded at ', Founded)
}

let Founded2 = sItm.test(str);
if (Founded2) {
  console.log("Founded Successfully", Founded2)
}

let Founded3 
console.log("Founded ", Founded3)
if (Founded3) {
  console.log("Founded ", Founded3)
}