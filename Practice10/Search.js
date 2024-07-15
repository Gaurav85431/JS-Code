let arr = [23, 4, 35, 53, 97, 46, 64, 5, 34, 76, 5, 46, 5, 75, 57, 75];
let index = 5;
let value = 97;

if ((index <= arr.length)) {

  let IndexSearch = arr[index];
  console.log("Index ", index, " per ", IndexSearch, " value hai");
}
let ValueSearch = arr.indexOf(value);
console.log(`${value} ye ${ValueSearch} index per hai`)

