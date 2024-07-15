let str = "hellogauravhowareyou";
let strSet = new Set(str);
let strArr = Array.from(strSet);
let strStr = strArr.join('');
console.log("String ", strStr)





let charMap = {};
let res = [];
for (let char of str) {
  if (!charMap[char]) {
    charMap[char] = true;
    res.push(char)
  }
}
console.log("Unique is ", res.join(''))