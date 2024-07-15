let str = "heolgaoeaiwlwvjiewaoewa agsiewaoiga;ewewa";
let strArr = str.split('');
let UniqueStr = new Set(strArr);
let StrArr = Array.from(UniqueStr);
let StrStr = StrArr.join('');
console.log("Remove Duplicate is ", StrStr)




/*  let unique = {};
let Unq = []
for (let char of str) {
  if (unique[char] !== char) { // How to check ki wo data object me hai ya nahi :::
    Unq.push(char)
  }
}
console.log("Unique is ", Unq)  */




let Unq = {};
let res = [];
for (let char of str) {
  if (!Unq[char]) {
    Unq[char] = true;
    res.push(char)
  }
}
let RemoveDuplicateString = res.join('');
console.log("Remove duplicate cahracter is ", RemoveDuplicateString)