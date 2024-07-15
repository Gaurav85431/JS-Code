let str = "hello gaurav how, are you ";
let strArr = str.split('');
let unique = new Set(strArr);
console.log("Unique char is ", unique)
let UniqueArr = Array.from(unique);
let UniqueString = UniqueArr.join('');
console.log("Unique array is ", UniqueArr);
console.log("Unique string is ", UniqueString)






// Ye jo unique  character aya hia usme se space ko remove karo
let RemoveSpace = UniqueString.split(' ').join('');
console.log("Remove all space is ", RemoveSpace)