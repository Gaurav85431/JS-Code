let arr = [43, 5, 3, 4, 357, 35, 34, 34, 6, 3, 44, 3634, 56, 65, 47, 5454, 6436, 34]
let searchItm = 443;
let find = arr.indexOf(searchItm);
if (find !== -1) {
  console.log(`${searchItm} is found at ${find} index`)
}
else {
  console.log("not found")
}