let str = "hello gaurav how are yyuoregs ";
// occurance of each character
let occurance = {};
let strChar = str.split('');
for (let itm of strChar) {
  if (occurance[itm]) {
    occurance[itm]++;
  }
  else {
    occurance[itm] = 1;
  }
}
console.log('Occurance is ', occurance)


// Occurance without space:-
let StrCh = str.split(' ').join('').split('');
let occur = {}
for (let char of StrCh) {
  if (occur[char]) {
    occur[char]++;
  }
  else {
    occur[char] = 1;
  }
}
console.log("Occurance is ", occur)