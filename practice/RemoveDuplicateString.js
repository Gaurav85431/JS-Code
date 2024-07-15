let str = "Hello Gaurav how are your";
let strArr = str.split('');
let RemoveDuplicateString = new Set(strArr);
let RemoveArray = Array.from(RemoveDuplicateString)
let RemoveDuplicateStringCombined = RemoveArray.join('');
console.log("Remove duplicate string is ", RemoveDuplicateStringCombined)





// 2nd way
let str2 = "heloo gaurav";
let strObj = {};
let strArray = []
for (let char of str2) {
  if (!strObj[char]) {
    strObj[char] = true;
    strArray.push(char);
  }
}
// console.log("array me ", strArray)
console.log("String me ", strArray.join(''))



// 3rd way-
let str4 = "hellogaurav";
let strArrr = str4.split('');
let UniqueSet = new Set(strArrr);
let UniqueArr = Array.from(UniqueSet);
console.log("unique array is ", UniqueArr)
console.log('unique string is ', UniqueArr.join(''))