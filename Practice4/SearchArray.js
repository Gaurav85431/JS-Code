// Find the element ki kon sa position per hai array me.
let arr = [3223, 4, 23, 3, 1, 4, 5343, 52, 3, 234, 235];
let ele = 3;
let index = arr.indexOf(ele);
if (index != -1) {
  console.log(`${ele} found at ${index}`);
}
else {
  console.log("NOt found")
}




// includes()
let found = arr.includes(ele);
if (found) {
  console.log(`Found`)
}
else { console.log("NOt found") }