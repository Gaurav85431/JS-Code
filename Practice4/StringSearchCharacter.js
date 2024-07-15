let str = "abcd deff klfda aei";
let char = "a";
let find = str.indexOf(char);

if (find !== -1) {
  console.log(`${char} is found at ${find}`);

}
else {
  console.log("Not found")
}


let st2 = 'alkfjalkdkla  aslgka agasklje';
let ch = 'A';
let st2LOWER = st2.toLowerCase();
let chLOWER = ch.toLowerCase();
let search = st2LOWER.indexOf(chLOWER);
if (search !== -1) {
  console.log("Found")
}
else {
  console.log("Not Found")
}