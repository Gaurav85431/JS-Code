let str = "hello gaurav how are you";
let search = 'h';
let find = str.indexOf(search);
if (find !== -1) {
  console.log(search, " is found at ", find);
}
else {
  console.log("not found")
}


let index = 5;
console.log("Itm at 5th index", str[index - 1])