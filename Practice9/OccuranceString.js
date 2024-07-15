let str = "helllogauravhowareyou";
let strArr = str.split('');
let occur = {};
for (let char of strArr) {
  if (occur[char]) {
    occur[char]++;
  }
  else {
    occur[char] = 1
  }
}
console.log("occur ", occur)

// let occurs = {}     ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
// for (let i = 0; i < strArr.length; i++) {
//   if (occurs[i] === strArr[i]) {
//     occurs[i]++;
//   }
//   else {
//     occurs[i] = 1;
//   }
// }
// console.log("Occurance is ", occurs)