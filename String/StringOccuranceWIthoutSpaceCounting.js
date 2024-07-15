//  1st way -- without space
/*
let str = "Gaurav how are you find me ";
let removeSpace = str.split(' ').join('');
let AllRemove = removeSpace.trim();
let occur = {};
let strArr = AllRemove.split('')
for (let i = 0; i < strArr.length; i++) {
  if (occur[strArr[i]]) {
    occur[strArr[i]]++
  }
  else {
    occur[strArr[i]] = 1;
  }
}
console.log("Occurance is ", occur)*/
// split().join() krne se sra space hat jay che

// trim() function: The trim() method is typically used to remove whitespace from both ends of a string. Since you've already removed all spaces using split(' ').join(''), trim() is unnecessary here.


// 1st correct way
let str = "Gaurav how are you find me";
let noSpaceStr = str.split(' ').join(''); // Remove all spaces
let occur = {};
let strArr = noSpaceStr.split(''); // Convert the string to an array of characters

for (let i = 0; i < strArr.length; i++) {
  if (occur[strArr[i]]) {
    occur[strArr[i]]++;
  } else {
    occur[strArr[i]] = 1;
  }
}

console.log("Character occurrences:", occur);


// 2nd ---- with space

let strr = "hello gaurav how are you";
let occ = {};
for (let itm of strr) {
  if (occ[itm]) {
    occ[itm]++;
  }
  else {
    occ[itm] = 1;
  }
}
console.log("Occ = ", occ)