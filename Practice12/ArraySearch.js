let arr = [12, 43, 5, 54, 34, 43, 646, 786, 56, 46, 54, 68, 78, 76, 90, 87];

let searchItm = 43;
let index = 5;
if (index > arr.length) {
  console.log("Exceed")
}
if (index !== -1) {

  let IndexValue = arr[index - 1];
  console.log(`${index} per ${IndexValue} hai`);
}
let Search = arr.indexOf(searchItm);


console.log(`${searchItm} is found at ${Search} index`)


// include()
if (arr.includes(searchItm)) {
  console.log("Search found")
}
else {
  console.log("Search not found")
}