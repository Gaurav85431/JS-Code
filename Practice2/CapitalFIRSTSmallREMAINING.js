// hELLO ya Hello

let str = 'gaurav, How are you';
let word = str.split(' ');
for (let i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
}

console.log(word)
console.log(word.join(' '));

// --------
let str2 = "How are you gaurav";
let strWord = str2.split(' ');
for (let i = 0; i < strWord.length; i++) {
  strWord[i] = strWord[i].charAt(0).toUpperCase() + strWord[i].slice(1).toLowerCase();

}
console.log("In array ", strWord);
console.log("In  String ", strWord.join(' '))