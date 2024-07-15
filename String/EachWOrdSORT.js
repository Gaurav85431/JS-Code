// each word ko sort 
let str = "hello gaurav how are You";
let WordSort = []
let wordsort = ""
let strArr = str.split(' ')
for (let word of strArr) {
  console.log("word ", word)
  let wordArr = word.split('');
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < wordArr.length - i - 1; j++) {
      if (wordArr[j] > wordArr[j + 1]) {
        let temp = wordArr[j];
        wordArr[j] = wordArr[j + 1];
        wordArr[j + 1] = temp;
      }
    }
  }
  // WordSort.push(wordArr)
  wordsort = wordsort + " " + wordArr.join('')
}
console.log("Word sort ", wordsort)