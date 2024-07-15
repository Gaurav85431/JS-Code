let str = 'hello Gaurav';
let searchVal = 'g';
let Find = str.indexOf(searchVal);
if (Find != -1) {
  console.log("Find ", searchVal, " is at ", Find, " index.")
}
else {
  console.log("not found")
}