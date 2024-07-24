let str = "hello gaurav how are you";
let strAr = str.split(' ');
let Rev = [];
for (let itm of strAr) {
  for (let i = itm.length - 1; i >= 0; i--) {
    Rev.push(itm[i]);
  }
  Rev.push(' ');

}

console.log("Reverse each word is ", Rev.join(''));