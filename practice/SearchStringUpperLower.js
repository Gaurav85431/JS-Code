// search H/h found
let str = "hello Gaurav";
let search = 'H';
let SearchInLowerCase = search.toLowerCase();
let StringInLowerCase = str.toLowerCase();

let find = StringInLowerCase.indexOf(SearchInLowerCase);
if (find != -1) {
  console.log(`${search} found at ${find} index in ${str}`);
}
else {
  console.log("not found")
}