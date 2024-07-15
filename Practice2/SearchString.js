let str = "gauravsauravpushpam";
let search = 'g';
let index = str.indexOf(search);
if (index == -1) {
  console.log("not found")
}
else {
  console.log(search, ' is found at ', str)
}


// 2nd case insensitive  me search
let str2 = "gaurav pushpma"
let searchItm = "G";
// 2way- str2 ko ya searchItm ko upper/lower(same case me karo)
let find = str2.indexOf(searchItm);
// console.log(find) //-1
let searchItmLowerCase = searchItm.toLowerCase();
let str2LowerCase = str2.toLowerCase();
let finding = str2LowerCase.indexOf(searchItmLowerCase);
if (finding != -1) {
  console.log("Found at ", finding)
}
else {
  console.log('Not found')
}