let str = "helleh";
let Rev = '';
for (let i = str.length - 1; i >= 0; i--) {
  Rev = Rev + str[i];
}
if (Rev === str) {
  console.log("Palindrome No. ")
}
else {
  console.log("Not Palindrome ")
}


// Rev Array
let RevArr = [];
for (let i = str.length - 1; i >= 0; i--) {
  RevArr.push(str[i]);
}
if (RevArr.join('') === str) {
  console.log("Palindrome No. ")
}
else {
  console.log("Not Palindrome ")
}