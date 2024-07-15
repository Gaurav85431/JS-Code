// Remove Starting Space
let str = "          Hello Gaurav HOw are ayour";
let RemoveStartingSpace = str.trim();
console.log(str)
console.log("Removed Space from Starting of string is ", RemoveStartingSpace)


// Remove All space

let str2 = "Hello World";
let strWithoutSpace = str2.split(' ').join('');
console.log("String without space is ", strWithoutSpace);



// 2nd way
console.log("String without space  is 2nd ways== ", str.replace(/\s+/g, ''));// \s find spaces, /g= global search



// 
/*
// Play and learn 
console.log("11", str2.split('')); //array me element 1-1 krke show=>> 11 ['H', 'e', 'l', 'l','o', ' ', 'W', 'o',  'r', 'l', 'd']
console.log("12", str2.split(' ')); // 12 [ 'Hello', 'World' ]
console.log("13", str2.split('').join('')); //13 Hello World
console.log("14", str2.split(' ').join('')); // 14 HelloWorld
console.log("15", str2.split('').join(' '));//15 H e l l o   W o r l d
console.log("16", str2.split(' ').join(' ')); // 16 Hello World
*/

