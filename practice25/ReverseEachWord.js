let str = "hello gaurav how are you";
let strAr = str.split(' ');
let RevWord = []
for (let itm of strAr) {
  for (let i = itm.length - 1; i >= 0; i--) {
    RevWord.push(itm[i])
  }
}
console.log("Reverse Word without space is ", RevWord.join(''))

// Svi word ko opposite karenge.
let RevWords = []
for (let itm of strAr) {
  for (let i = itm.length - 1; i >= 0; i--) {
    RevWords.push(itm[i])
  }
  RevWords.push(' ')
}
console.log("Reverse Word without space is ", RevWords.join(''))