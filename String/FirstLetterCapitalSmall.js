// First letter capital

let str = "hello Gaurav";
if (str.length === 0) {
  console.log("Minimum 1 length")
  return str;
}
let captialFirstString = str[0].toUpperCase() + str.slice(1); // 1st element ko remove karo
console.log("First Letter Capital ", captialFirstString);

console.log("Remove 1st char of ", str, " by splice()   ", str.slice(1))

// First letter small
let str2 = "Hello Gaurav";
if (str2.length === 0) {
  console.log("Minimum length of string should be 1")
  return str2;
}
let SmallFirstString = str2[0].toLowerCase() + str2.slice(1);
console.log("First letter small ", SmallFirstString);

// Another way
let strr = "hello";
let firstChar = strr.charAt(0);

if (firstChar >= 'a' && firstChar <= 'z') {
  firstChar = firstChar.toUpperCase();
}

let output = firstChar + str.slice(1);
console.log(output);
