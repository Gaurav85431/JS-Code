let arr = [21, 32, 34, 5, 4, 65, 75, 67, 86, 84, 89];
let searchItm = 4;
let Index = arr.indexOf(searchItm);
if (Index !== -1) {
  console.log(`${searchItm} is found at ${Index}`)
}
else {
  console.log('Not found ')
}


//   
let index = 5;
console.log(arr[index - 1]);

if (arr.includes(searchItm)) {
  console.log("Search Found")
}
else {
  console.log("Not found")
}