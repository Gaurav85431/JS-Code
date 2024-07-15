let str = "lajfklkjfsdeoiwgajkl";
let search = 'f';
let find = str.indexOf(search);
if (find !== -1) {
  console.log(`${search} is found at ${find} index`)
}
else {
  console.log("not found")
}




// 2nd way
let prtn = /laj/;
let searchItm = str.match(prtn);
console.log("Match is ", searchItm)