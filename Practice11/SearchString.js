let str = "how are you guyz";
let search = "h";
let strSmall = str.toLowerCase();
let searchSmall = search.toLowerCase();

let Found = strSmall.indexOf(searchSmall);
if (Found !== -1) {
  console.log(`${search} is at ${Found} index`)
}
else {
  console.log(`Not found`)
}





// By Regex
let PatternSearch = /how/;
let match = str.match(PatternSearch);
console.log("matched is ----- ", match)