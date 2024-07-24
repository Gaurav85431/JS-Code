let str = "hello gaurav how are you";
let strWithoutSpace = str.split(' ').join('').split('').reverse().join('');
console.log("Reverse character without space ", strWithoutSpace);

let strWithSpace = str.split('').reverse().join('');
console.log("Rev with space ", strWithSpace)



let strWordRev = str.split(' ').reverse().join(' ')
console.log("Rev word of string ", strWordRev)



let Rev = [];
let strArr = str.split(' ').join('').split('');
for (let i = strArr.length - 1; i >= 0; i--) {
  Rev.push(strArr[i])
}
console.log("Rev String ", Rev.join(''))