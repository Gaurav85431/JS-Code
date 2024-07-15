let str = "hello how are you gaurav";
let s = new Set(str);
console.log("Removed duplicate with space ", s)

let myStr = str.split(' ').join('');
let Unique = new Set(myStr);
console.log("Unique character without space is ", Unique)

let myStrArr = Array.from(Unique);
let myStrString = myStrArr.join('');
console.log("   ", myStrArr, " and in string ", myStrString)




let myS = "Hello gaurav how are you";
let mySA = [];
let occ = {};
for (let char of myS) {
  if (!occ[char]) {
    occ[char] = true;
    mySA.push(char)
  }
}