let word = "hello gaurav how are you bouzzzzzzzzz";
let WordArr = word.split(' ');
let Capital = []
for (let words of WordArr) {
  words = words[0].toUpperCase() + words.toLowerCase().slice(1);
  Capital.push(words);
}
console.log("Capital of each ", Capital)

let WordStr = Capital.join(' ')
console.log(" ", WordStr);






// 2nd way
let str = "Heloo how are you"
let myWord = str.split(' ');//hello gaurav
for (let i = 0; i < myWord.length; i++) {
  myWord[i] = myWord[i].charAt(0).toUpperCase() + myWord[i].slice(1).toLowerCase();
}
console.log(myWord.join(' '))



// 3rd way
let Str = "Hello wolrd sdlf asgd";
let StrArr = Str.split(' ');
let res = ""
for (let i = 0; i < StrArr.length; i++) {
  let Wr = StrArr[i];
  Wr = Wr.charAt(0).toUpperCase() + Wr.slice(1).toLowerCase();
  res = res + " " + Wr;
}
console.log("Result in string is ", res)