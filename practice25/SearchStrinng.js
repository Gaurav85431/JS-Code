let str = "Hello Gaurav how are you";
let searchItm = /hello/
let match = str.match(searchItm);
if (match) {
  console.log('found ', match)
}
else {
  console.log("not found", match)
}



let test = searchItm.test(str)
if (test) {
  console.log(`${searchItm} found : ${test}`)
}
else {
  console.log(`${searchItm} found : ${test}`)
}