let arr = [23, 43, 54, 46, 664, 54, 34, 32, 23, 32];
let searchItm = 23;//43;
let find = arr.indexOf(searchItm)
console.log("find is ", find)
if (find) {//searchItm 23 me ye if nhi chalega bcz 23 is at 0th index so it give 0 so go to else block.
  console.log(`${searchItm} is found at ${find} index`);
}
else {
  console.log("Not found");
}


// ------------ANOTHER WAY
let myArr = [21, 4, 35, 342, 323, 53, 46, 57, 4, 344, 3457, 789, 745];
let itm = 21;
let found = myArr.indexOf(itm);
if (found !== -1) {
  console.log(itm, "Itm found at ", found, " index")
}
else {
  console.log("Item not found")
}