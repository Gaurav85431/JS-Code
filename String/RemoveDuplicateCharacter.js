// Remove Duplicate String 

let str = "Hello World"
let duplicateString = [...new Set(str)].join('') //isko set(unique) me de diye fir isko join laga ke string bana diye
console.log("Unique string is ", duplicateString);



// Join() and split are opposite to each other.;
// join() -> concatenate array in string;
// split() -> split  string in array;


// 2nd way--
let strng = "Hello hm lallan hai";
let charMap = {};
let result = [];
for (const char of strng) {
  if (!charMap[char]) {
    charMap[char] = true;
    result.push(char)
  }
}
console.log("Unique ya removed duplicate  ", result.join(''))

// 3rd way-
let str4 = "hellogaurav";
let strArr = str4.split('');
let UniqueSet = new Set(strArr);
let UniqueArr = Array.from(UniqueSet);
console.log("unique array is ", UniqueArr)
console.log('unique string is ', UniqueArr.join(''))

// 4th way Space ko remove kar ke(bina space ke count kiye)
let strr = "hello how are you gaurav";
let s = new Set(strr);
console.log("Removed duplicate with space ", s)

let myStr = str.split(' ').join('');
let Unique = new Set(myStr);
console.log("Unique character without space is ", Unique)