let str = "lagjajeiajowjagejjgawe";
let strArr = str.split('');
let uniqueStrArr = new Set(strArr);
let UniqueArr = Array.from(uniqueStrArr);
console.log(UniqueArr)
let uniqueString = UniqueArr.join('');
console.log(uniqueString)