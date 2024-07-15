// Reverse String :-
let str = "hello";
let RevStringInArray = str.split('').reverse();
let RevString = str.split('').reverse().join('');

// split() -> string ko whitespace(space, tab, newline) ke basis par split karta hai aur new array me rkhta hai  i.e. "he"= ['h','e']

// split('') ka use karte hain, to string ko har ek character ke basis par split kiya jata hai aur un characters ko ek array mein store kiya jata hai. i.e. "he"=["he"]

// join('') -> array ke harek element ko concatenate karke ek string banaya jata hai. i.e. ['h','e']= he

// join()-> bina separator use karte hain, to wo array ke har ek element ko comma , ke saath concatenate karke ek string banata hai. ['h','e'] => 'h,e'


console.log("reverse string in array ", RevStringInArray);
console.log("Reverse string ", RevString)
// ----------------------
// 1st way
let str2 = "helloe";
let revStr = str2.split('').reverse().join('')
console.log("Reverse string is ", revStr)

// 2nd way (manually)
let strng = "hello";
let strArr = strng.split('');
let revString = [];
for (let i = strArr.length - 1; i >= 0; i--) {
  revString.push(strArr[i]);
}
let RevStr = revString.join('');
console.log("Rev string ", RevStr);