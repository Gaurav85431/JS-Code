let str = "hello gaurav how are you";
let index = 4;
let searchItm = 'u';
if (index > str.length) {
  console.log("More than string size")
}
else {

  let find = str.indexOf(searchItm);
  if (find !== -1) {

    console.log(`${searchItm} is found at ${find} index in ${str} string`);
  }
  else {
    console.log("No found")
  }


  console.log(`At ${index} the value is ${str[index - 1]}`)
}