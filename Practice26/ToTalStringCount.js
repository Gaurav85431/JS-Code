let str = "hello gaurav how are you";
let length = str.length;
console.log("String length is ", length)

let spaceCount = 0;
let strAr = str.split('');
for (let itm of str) {
  if (itm === ' ') {
    spaceCount++
  }
}
console.log("Total space in string    ", spaceCount)
// TOTAL SPACE IN STRING
