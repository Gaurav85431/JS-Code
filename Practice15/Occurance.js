let str = "gaurav how are you how are youhow are you";
let strArr = str.split(' ');
let OccWord = {}
for (let char of strArr) {
  if (OccWord[char]) {
    OccWord[char]++
  }
  else {
    OccWord[char] = 1;
  }
}
console.log("OCcurance word is ", OccWord)


let OccChar = {};
let strAr = str.split(' ').join('').split('');
for (let char of strAr) {
  if (OccChar[char]) {
    OccChar[char]++
  }
  else {
    OccChar[char] = 1;
  }
}
console.log("OCcurance of char is ", OccChar)