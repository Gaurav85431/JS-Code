let str = "Hello gaurav how are you";
let stral = str.split(' ').join('').split('').sort().join('');
console.log("String in asc sort ", stral)

let strDes = str.split(' ').join('').split('').sort((a, b) => b.localeCompare(a)).join('');
console.log("String in Dsc sort ", strDes)




let strWord = str.split(' ');
let Ws = ''
for (let wordStr of strWord) {
  // console.log("WORD ", word)
  let word = wordStr.split('')
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length - i - 1; j++) {
      if (word[j] > word[j + 1]) {
        let temp = word[j];
        word[j] = word[j + 1];
        word[j + 1] = temp;
      }
    }
  }
  Ws = Ws + " " + word.join('');
}
console.log("Word sort is ", Ws)