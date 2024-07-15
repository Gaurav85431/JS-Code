// SORT wla v banana hia:::::: compare wala v  (large small)

let str = "hello gaurav how are You";
let Asc = str.split(' ').join('').split('').sort().join('');
let Dsc = str.split(' ').join('').split('').sort((a, b) => b.localeCompare(a)).join('');
console.log("Ascending and Descending order is ", Asc, "  and  ", Dsc)



// Manually
let strAr = str.split(' ').join('').split('');
for (let i = 0; i < strAr.length; i++) {
  for (let j = 0; j < strAr.length - i - 1; j++) {
    if (strAr[j] > strAr[j + 1]) {
      let temp = strAr[j];
      strAr[j] = strAr[j + 1];
      strAr[j + 1] = temp;
    }
  }
}
console.log("Ascending sort is ", strAr)
console.log("Asc sort string ", strAr.join(''))



// each word ko sort 

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