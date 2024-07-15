// Find 20 at which position:-

let arr = [12, 23, 34, 54, 30, 20, 35, 64];
let searchItm = 20;
let Index = arr.indexOf(searchItm)

// let myIndex=5//5th index ka value🔍
// console.log(arr[myIndex])

if (Index !== -1) {
  // -1 incase of not found
  console.log("found at ", arr.indexOf(searchItm));

}
else {
  console.log("Not found ");
}


// 2nd way--  includes() se     ---------------------------------------
if (arr.includes(searchItm)) {
  console.log(`Search founded `)
}
else {
  console.log("Not found")
}