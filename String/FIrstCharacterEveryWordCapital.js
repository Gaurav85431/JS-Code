let str = "hello, Gaurav how are you";

// Each word ko split kraenge space ke base pr
let word = str.split(' ');
// console.log(word)

for (let i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase(); //slice(1) ka mtlb hai ki string ke first character ko chhod kar ke banki ke sare.
}

let captialFirstString = word.join(' ');
console.log("First letter capital of ----- ", captialFirstString);



// ISKO CHECK KR LO CHATGPT SB SE Ye hm khud se banaye hia-
let str2 = "Hello gaurav how are you";
let res = str2.split(' ');
let out = []
for (let itm of res) {
  itm = itm[0].toUpperCase() + itm.slice(1);
  out.push(itm)
}

console.log(out.join(' '));

// -
let str3 = "Hello gaurav how are you";
let res2 = str.split(' ');
let result = "";
for (let itm of res2) {
  itm = itm[0].toUpperCase() + itm.slice(1);
  // itm = itm[0].toUpperCase() + itm.toLowerCase().slice(1);    // ye tab agr user kahi bich me capital small ka mix diya hai

  result = result + " " + itm;
}

console.log("RESULT IS ", result)

