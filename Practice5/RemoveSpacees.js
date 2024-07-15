let str = " Hello      WOrld";
let removespace = str.split(' ').join('');
console.log(removespace)



// Each word ka 1st letter capital aur usse pehle 1 sapce;
let word = str.split(' ');
let myarr = [];
for (let i = 0; i < word.length; i++) {
  if (word[i] == '') {
    continue;
  }
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";

}
let wordInString = word.join('');
console.log(wordInString)