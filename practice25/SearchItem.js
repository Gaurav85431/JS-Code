let arr = [343, 2, 35, 35, 46, 46, 46, 46, 45, 35, 345, 43, 345, 345, 543];
let searchItm = 54;
let index = 4;
if (index > arr.length) {
  console.log("Index is exceed of array length ")
}
else {
  let found = arr[index - 1];
  console.log("Value at ", index, " is ", found)
}



let find = arr.indexOf(searchItm);
if (find !== -1) {
  console.log(searchItm, " is found at ", find)
}
else {
  console.log(" ", searchItm, "Not found ")
}
